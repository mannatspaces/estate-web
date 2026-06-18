import { useState } from 'react';

function AuthPage() {
  const [mode, setMode] = useState('login');

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-glass md:grid-cols-[0.9fr_0.9fr]">
        <div className="space-y-6">
          <span className="section-heading">Secure Access</span>
          <h1 className="text-4xl font-semibold text-white">Login or signup for a tailored property experience.</h1>
          <p className="text-slate-300">Save favorites, request site visits, and manage listings with a premium account experience.</p>
          <div className="space-y-3 rounded-3xl bg-slate-950/75 p-5">
            <button
              onClick={() => setMode('login')}
              className={`w-full rounded-3xl px-5 py-4 text-left text-sm font-semibold transition ${mode === 'login' ? 'bg-slate-900 text-white' : 'text-slate-300 hover:bg-white/5'}`}
            >
              Login
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`w-full rounded-3xl px-5 py-4 text-left text-sm font-semibold transition ${mode === 'signup' ? 'bg-slate-900 text-white' : 'text-slate-300 hover:bg-white/5'}`}
            >
              Signup
            </button>
          </div>
        </div>

        <div className="glass-panel rounded-[32px] p-8">
          <h2 className="text-3xl font-semibold text-white">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
          <form className="mt-8 space-y-6">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-slate-300">Full name</label>
                <input type="text" placeholder="Ayesha Kapoor" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-300">Email</label>
              <input type="email" placeholder="email@domain.com" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Password</label>
              <input type="password" placeholder="••••••••" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
            </div>
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-slate-300">Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
              </div>
            )}
            <button type="button" className="w-full rounded-3xl bg-accent px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-accent2">
              {mode === 'login' ? 'Login Securely' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
