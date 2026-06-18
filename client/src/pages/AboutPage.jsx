import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-glass">
        <span className="section-heading">About Us</span>
        <h1 className="mt-4 text-4xl font-semibold text-white">Building the future of luxury property discovery.</h1>
        <p className="mt-6 text-slate-300 leading-relaxed">
          MannatSpaces is a premium real estate experience designed to feel modern, elegant, and intuitive. We combine curated listings, advanced search, and intelligent agent support to help you find the ideal address with confidence.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-xl font-semibold text-white">Curated Portfolio</h2>
            <p className="mt-3 text-slate-400">Exclusive high-end residential, commercial and investment properties.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-xl font-semibold text-white">Seamless Search</h2>
            <p className="mt-3 text-slate-400">Filter by budget, location, type and instantly see updated listings.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
            <h2 className="text-xl font-semibold text-white">Trusted Agents</h2>
            <p className="mt-3 text-slate-400">Personalized connections with certified property advisors.</p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="glass-panel rounded-[32px] p-8">
            <h3 className="text-2xl font-semibold text-white">Our mission</h3>
            <p className="mt-4 text-slate-300">To build a rich digital experience for premium property seekers with powerful search, sleek visuals, and reliable information.</p>
          </div>
          <div className="glass-panel rounded-[32px] p-8">
            <h3 className="text-2xl font-semibold text-white">Our vision</h3>
            <p className="mt-4 text-slate-300">To become the most trusted futuristic property platform, blending luxury design with intelligent workflows.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/listings" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent2">
            Explore Listings
          </Link>
          <Link to="/contact" className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-200">
            Talk to an Agent
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
