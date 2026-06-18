import { Link } from 'react-router-dom';

function Footer() {
  return (
   <footer className="border-t border-slate-200 bg-white text-slate-700"> 
      <div className="mx-auto max-w-7xl space-y-10 px-5 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 text-slate-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5E98FF] to-[#8CDBFF] text-lg font-black text-slate-950">MS</span>
              <div>
                <p className="text-xl font-semibold">MannatSpaces</p>
                <p className="text-slate-400">Premium property search with futuristic glass UI.</p>
              </div>
            </div>
            <p className="max-w-md text-slate-400">Find luxury homes, branded commercial spaces, investment plots, and smart agent support in one modern destination.</p>
          </div>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-slate-500">Explore</p>
            <div className="space-y-3 text-sm">
              <Link to="/" className="block hover:text-white">Home</Link>
              <Link to="/listings" className="block hover:text-white">Listings</Link>
              <Link to="/about" className="block hover:text-white">About</Link>
              <Link to="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-slate-500">Contact</p>
            <p className="text-sm text-slate-400">+91 98765 43210</p>
            <p className="mt-3 text-sm text-slate-400">hello@mannatspaces.in</p>
            <p className="mt-3 text-sm text-slate-400">Mumbai, India</p>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-4 text-sm text-slate-500">© 2026 MannatSpaces. Built for premium real estate discovery.</div>
      </div>
    </footer>
  );
}

export default Footer;
