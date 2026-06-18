import { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';

function ListingsPage({ properties, favorites, toggleFavorite, filters, setFilters, search, setSearch }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [properties]);

  const skeletonCards = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="animate-pulse rounded-[32px] border border-white/10 bg-slate-950/60 p-6" />
  ));

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glass md:p-10">
        <div className="flex flex-col gap-6 md:items-center md:justify-between md:flex-row">
          <div>
            <span className="section-heading">Property Listings</span>
            <h1 className="mt-3 text-3xl font-semibold text-white">Browse premium real estate with curated filters.</h1>
          </div>
          <div className="rounded-3xl bg-slate-950/80 px-5 py-3 text-sm font-medium text-slate-300">
            {properties.length} properties available
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none"
                placeholder="Search location, type, or title"
              />
              <select
                value={filters.type}
                onChange={(e) => setFilters((prev) => ({ ...prev, type: e.target.value }))}
                className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none"
              >
                <option value="">All Types</option>
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
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                value={filters.location}
                onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
                className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none"
                placeholder="City or neighborhood"
              />
              <button
                type="button"
                onClick={() => {
                  setFilters({ type: '', location: '', budget: '' });
                  setSearch('');
                }}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-accent"
              >
                Reset filters
              </button>
            </div>
          </div>

          <aside className="glass-panel rounded-[32px] p-6">
            <span className="section-heading">Insights</span>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-slate-950/75 p-5">
                <p className="text-sm text-slate-400">Active Listings</p>
                <p className="mt-3 text-3xl font-semibold text-white">{properties.length}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/75 p-5">
                <p className="text-sm text-slate-400">Top Type</p>
                <p className="mt-3 text-2xl font-semibold text-white">{filters.type || 'All'}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? skeletonCards : properties.length > 0 ? properties.map((property) => {
          const propertyId = property._id || property.id;
          return <PropertyCard key={propertyId} property={property} isFavorite={favorites.has(propertyId)} toggleFavorite={toggleFavorite} />;
        }) : (
          <div className="glass-panel col-span-full rounded-[32px] p-12 text-center text-slate-300">
            No matching properties were found. Try adjusting your filters.
          </div>
        )}
      </div>
    </section>
  );
}

export default ListingsPage;
