import { useMemo, useState } from 'react';
import AdminPropertyForm from '../components/AdminPropertyForm';
import AdminStatsCard from '../components/AdminStatsCard';
import '../../admin/styles/admin.css';

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function AdminDashboard({ properties, contacts = [], addProperty, updateProperty, deleteProperty, onLogout }) {
  const [activeProperty, setActiveProperty] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const totalValue = useMemo(() => properties.reduce((sum, item) => sum + (item.price || 0), 0), [properties]);

  const handleEdit = (property) => {
    setActiveProperty(property);
    setShowForm(true);
  };

  const handleSave = (property) => {
    if (activeProperty) {
      updateProperty(property);
    } else {
      addProperty(property);
    }
    setActiveProperty(null);
    setShowForm(false);
  };

  return (
    <section className="admin-dashboard mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="admin-panel-card rounded-2xl p-10 shadow-2xl shadow-slate-950/20 lg:flex-1">
          <div className="flex flex-col gap-6">
            <span className="section-heading">Admin Dashboard</span>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white">anage premium listings with confidence.</h1>
                <p className="mt-3 max-w-2xl text-slate-400">Add new properties, monitor live inventory, and keep the portfolio fresh for high-end buyers.</p>
              </div>
              <button onClick={onLogout} className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">Sign out</button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <AdminStatsCard label="Total properties" value={properties.length} />
              <AdminStatsCard label="Portfolio value" value={formatCurrency(totalValue)} />
              <AdminStatsCard label="Total Leads" value={contacts.length} />
            </div>
          </div>
        </div>

        <div className="admin-form-card rounded-2xl p-10 shadow-2xl shadow-slate-950/10 lg:w-[420px]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="section-heading">Listing Builder</span>
              <p className="mt-2 text-slate-400">Create or update premium properties with image uploads and custom tags.</p>
            </div>
            <button onClick={() => { setActiveProperty(null); setShowForm((open) => !open); }} className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white transition hover:border-slate-700">
              {showForm ? 'Hide form' : 'New listing'}
            </button>
          </div>

          {showForm && (
            <div className="mt-8">
              <AdminPropertyForm selectedProperty={activeProperty} onSave={handleSave} onCancel={() => { setActiveProperty(null); setShowForm(false); }} />
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-6"> 
        {properties.map((property) => {
          const propertyId = property._id || property.id;
          return (
            <div key={propertyId} className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-white">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{property.tag || 'Premium'}</p>
                  <h2 className="mt-2 text-2xl font-semibold">{property.title}</h2>
                  <p className="mt-2 text-slate-400">{property.location} • {property.neighborhood}</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleEdit(property)} className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-accent2">Edit</button>
                  <button onClick={() => deleteProperty(propertyId)} className="rounded-xl border border-rose-400/20 px-5 py-3 text-sm text-rose-200 hover:bg-rose-500/10">Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12">
  <h2 className="mb-6 text-3xl font-bold text-white">
    Contact Leads
  </h2>

  <div className="grid gap-4">
    {contacts.length === 0 ? (
      <div className="rounded-[24px] bg-slate-950 p-6 text-slate-400">
        No contact requests yet.
      </div>
    ) : (
      contacts.map((lead) => (
        <div
          key={lead._id}
          className="rounded-[24px] border border-slate-700 bg-slate-950 p-6 text-white"
        >
          <div className="grid gap-2">
            <p><strong>Name:</strong> {lead.name}</p>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Phone:</strong> {lead.phone}</p>
            <p><strong>Message:</strong> {lead.message}</p>
            <p className="text-sm text-slate-400">
              Status: {lead.status}
            </p>
          </div>
        </div>
      ))
    )}
  </div>
</div>
    </section>
  );
}

export default AdminDashboard;
