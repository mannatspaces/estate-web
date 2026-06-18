import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminLoginPage from './admin/pages/AdminLoginPage';
import NotFoundPage from './pages/NotFoundPage';
import api, { setAuthToken } from './api/api';

function PrivateRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/mannat-admin-panel" replace />;
  }
  return children;
}

function App() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(() => new Set());
  const [filters, setFilters] = useState({ type: '', location: '', budget: '' });
  const [search, setSearch] = useState('');
  const [properties, setProperties] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    const token = localStorage.getItem('mannatspaces-admin-token');
    if (token) setAuthToken(token);
    return Boolean(token);
  });
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem('mannatspaces-admin-token'));

  useEffect(() => {
  const loadData = async () => {
    try {
      const propertiesResponse = await api.get('/properties');
      setProperties(propertiesResponse.data);

      if (adminToken) {
        setAuthToken(adminToken);

        const contactsResponse = await api.get('/contacts');

        setContacts(contactsResponse.data.requests || []);
      }
    } catch (error) {
      console.error(error);
    }
  };

  loadData();
}, [adminToken]);

  const visibleProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchMatch = [property.title, property.location, property.type, property.neighborhood]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase());
      const typeMatch = filters.type ? property.type === filters.type : true;
      const locationMatch = filters.location ? property.location === filters.location : true;
      const budgetMatch = (() => {
        if (!filters.budget) return true;
        const value = property.price;
        if (filters.budget === 'lt5') return value < 500000;
        if (filters.budget === '5to10') return value >= 500000 && value < 1000000;
        if (filters.budget === '10to25') return value >= 1000000 && value < 2500000;
        if (filters.budget === '25to50') return value >= 2500000 && value < 5000000;
        if (filters.budget === '50plus') return value >= 5000000;
        return true;
      })();
      return searchMatch && typeMatch && locationMatch && budgetMatch;
    });
  }, [search, filters, properties]);

  const toggleFavorite = (id) => {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const addProperty = async (property) => {
  try {
    console.log('SENDING PROPERTY:', property);

    const response = await api.post('/admin/properties', property);

    console.log('SERVER RESPONSE:', response.data);

    setProperties((current) => [response.data, ...current]);
  } catch (error) {
    console.error('ADD PROPERTY ERROR:', error.response?.data || error);
  }
};
  const updateProperty = async (updatedProperty) => {
    try {
      const response = await api.put(`/admin/properties/${updatedProperty._id}`, updatedProperty);
      setProperties((current) => current.map((item) => (item._id === response.data._id ? response.data : item)));
    } catch (error) {
      console.error('Unable to update property', error);
    }
  };

  const deleteProperty = async (propertyId) => {
    try {
      await api.delete(`/admin/properties/${propertyId}`);
      setProperties((current) => current.filter((item) => item._id !== propertyId));
    } catch (error) {
      console.error('Unable to delete property', error);
    }
  };

  const handleAdminLogin = (token) => {
    localStorage.setItem('mannatspaces-admin-token', token);
    setAuthToken(token);
    setAdminToken(token);
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('mannatspaces-admin-token');
    setAuthToken(null);
    setAdminToken(null);
    setIsAdminAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-midnight text-slate-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={window.location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  properties={visibleProperties}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  filters={filters}
                  setFilters={setFilters}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />
            <Route
              path="/listings"
              element={
                <ListingsPage
                  properties={visibleProperties}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  filters={filters}
                  setFilters={setFilters}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />
            <Route path="/property/:id" element={<PropertyDetailsPage properties={properties} favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
  path="/mannat-admin-panel"
  element={<AdminLoginPage onAdminLogin={handleAdminLogin} />}
/>

    <Route
  path="/admin"
  element={
    <PrivateRoute isAuthenticated={isAdminAuthenticated}>
      <AdminDashboard
        properties={properties}
        contacts={contacts}
        addProperty={addProperty}
        updateProperty={updateProperty}
              deleteProperty={deleteProperty}
              onLogout={handleAdminLogout}
           />
           </PrivateRoute>
            }
          />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
