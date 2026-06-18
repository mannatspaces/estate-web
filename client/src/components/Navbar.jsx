import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Listings', path: '/listings' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Login', path: '/auth' }
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <NavLink to="/" className="inline-flex items-center gap-3 text-lg font-semibold tracking-[0.14em] text-white">
          <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5E98FF] to-[#8CDBFF] text-xl font-black text-slate-950 shadow-[0_20px_60px_rgba(0,121,255,0.16)]">
            MS
          </span>
          MannatSpaces
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
