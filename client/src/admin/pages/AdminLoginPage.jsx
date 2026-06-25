import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import '../../admin/styles/admin.css';

function AdminLoginPage({ onAdminLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      onAdminLogin(response.data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid admin credentials.');
    }
  };

  return (
    <section className="admin-login-bg flex min-h-screen items-center justify-center px-2 py-10">
      <div className="w-full max-w-md rounded-xl bg-slate-950/95 shadow-2xl border border-slate-700 p-10">
        <div className="mb-8 text-center">
          <span className="section-heading text-accent font-semibold tracking-widest uppercase">Admin Login</span>
          <h1 className="mt-3 text-3xl font-bold text-white">Welcome Back, Admin</h1>
          <p className="mt-2 text-slate-500">Sign in to manage MannatSpaces listings and analytics.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="admin@mannatspaces.in"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
            />
          </div>
          <button className="w-full rounded-xl bg-accent px-5 py-3 text-base font-semibold text-white shadow transition hover:bg-accent2">Login to dashboard</button>
          {error && <p className="text-center text-sm text-rose-500 mt-2">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default AdminLoginPage;
