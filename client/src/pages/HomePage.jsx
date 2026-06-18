import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';

const tabOptions = ['Buy', 'Rent', 'Commercial'];

function HomePage({ properties, favorites, toggleFavorite, filters, search, setFilters, setSearch }) {
  const [activeTab, setActiveTab] = useState('Buy');
  const featured = properties;
  const topCities = ['Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Noida'];

  const filteredProperties = properties.filter((item) => {
    if (activeTab === 'Buy') return item.tag !== 'Rent';
    if (activeTab === 'Rent') return item.tag === 'Rent';
    return item.tag === 'Commercial';
  });

  return (
    <section className="overflow-hidden">
      <div className="relative bg-[radial-gradient(circle_at_top,_rgba(94,152,255,0.24),_transparent_30%),linear-gradient(135deg,#08162f_0%,#071b35_100%)] px-5 pb-20 pt-12 sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(94,152,255,0.18),_transparent_28%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
              <span className="section-heading">MannatSpaces</span>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">Discover premium properties with a futuristic glass experience.</h1>
              <p className="max-w-2xl text-slate-300">Find the most exclusive homes, branded commercial towers, and investment plots with intelligent search and cutting-edge visuals.</p>
              <div className="grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
                <Link to="/listings" className="rounded-3xl bg-accent px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-accent2">
                  Explore Listings
                </Link>
                <a href="tel:+919876543210" className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-accent">
                  Call Agent
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75 }} className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(94,152,255,0.16),transparent_50%)]" />
              <div className="relative space-y-4">
                <div className="rounded-3xl bg-slate-950/95 p-5">
                  <h2 className="text-lg font-semibold text-white">Premium property search</h2>
                  <p className="mt-2 text-sm text-slate-400">Use smart filters, compare featured properties, and find the perfect address instantly.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {tabOptions.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${activeTab === tab ? 'bg-accent text-slate-950 shadow-glow' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/80 p-5">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search location, city, or property"
                      className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none"
                    />
                    <select
                      value={filters.type}
                      onChange={(e) => setFilters((prev) => ({ ...prev, type: e.target.value }))}
                      className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none"
                    >
                      <option value="">Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Plot">Plot</option>
                    </select>
                    <select
                      value={filters.budget}
                      onChange={(e) => setFilters((prev) => ({ ...prev, budget: e.target.value }))}
                      className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none"
                    >
                      <option value="">Budget</option>
                      <option value="lt5">Below ₹5L</option>
                      <option value="5to10">₹5L - ₹10L</option>
                      <option value="10to25">₹10L - ₹25L</option>
                      <option value="25to50">₹25L - ₹50L</option>
                      <option value="50plus">Above ₹50L</option>
                    </select>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button type="button" className="rounded-3xl bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/20">
                      Advanced filters
                    </button>
                    <button type="button" className="rounded-3xl border border-white/10 px-5 py-3 text-sm text-white transition hover:border-accent">
                      Check featured
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-16 max-w-7xl space-y-16">
            <section className="space-y-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="section-heading">Featured properties</p>
                  <h2 className="text-3xl font-semibold text-white">Premium listings selected for you</h2>
                </div>
                <Link to="/listings" className="rounded-3xl border border-white/10 px-5 py-3 text-sm text-slate-200 transition hover:border-accent">
                  View All
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featured.map((property) => {
                  const propertyId = property._id || property.id;
                  return <PropertyCard key={propertyId} property={property} isFavorite={favorites.has(propertyId)} toggleFavorite={toggleFavorite} />;
                })}
              </div>
            </section>

            <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
                <div className="space-y-4">
                  <p className="section-heading">Top cities</p>
                  <h2 className="text-3xl font-semibold text-white">Explore sought-after markets</h2>
                  <p className="max-w-xl text-slate-300">Search by city and discover premium investment opportunities available right now.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {topCities.map((city) => (
                    <div key={city} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-center">
                      <p className="text-lg font-semibold text-white">{city}</p>
                      <p className="mt-2 text-sm text-slate-400">Curated luxury listings</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-3">
              <div className="glass-panel rounded-[32px] p-8">
                <span className="section-heading">Why choose us</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">A premium experience built for modern property seekers.</h3>
                <p className="mt-4 text-slate-300">Advanced search, luxury presentation, and seamless contact flows tailored for buyers, renters, and investors.</p>
              </div>
              <div className="glass-panel rounded-[32px] p-8">
                <span className="section-heading">Trusted agents</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">Expert support for every property journey.</h3>
                <p className="mt-4 text-slate-300">High-touch agent service ensures smooth touring, negotiation, and closing.</p>
              </div>
              <div className="glass-panel rounded-[32px] p-8">
                <span className="section-heading">Fast insights</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">Instant market visibility, zero distraction.</h3>
                <p className="mt-4 text-slate-300">Our layout and filters are optimized for speed and clarity so you can make decisions quickly.</p>
              </div>
            </section>

            <section className="rounded-[36px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_0.7fr] lg:items-center">
                <div>
                  <p className="section-heading">What clients say</p>
                  <h2 className="text-3xl font-semibold text-white">Trusted by premium buyers across India.</h2>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                    <p className="text-slate-300">“MannatSpaces made our executive relocation effortless. The UI felt premium and the search was fast.”</p>
                    <p className="mt-4 font-semibold text-white">Priya Sharma, Corporate Buyer</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                    <p className="text-slate-300">“The contact flow and property details were modern and very easy to navigate on mobile.”</p>
                    <p className="mt-4 font-semibold text-white">Sameer Gupta, Investor</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glass">
              <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <p className="section-heading">Get started</p>
                  <h2 className="text-3xl font-semibold text-white">Find the right property today.</h2>
                  <p className="mt-3 text-slate-300">Book a consultation or browse the latest featured addresses on MannatSpaces.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://wa.me/918251096645" target="_blank" rel="noreferrer" className="rounded-3xl bg-green-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-green-400">
                    Chat on WhatsApp
                  </a>
                  <a href="tel:+919876543210" className="rounded-3xl border border-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:border-accent">
                    Call now
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
