import { useParams, Link } from 'react-router-dom';
import MapSection from '../components/MapSection';

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function PropertyDetailsPage({ properties, favorites, toggleFavorite }) {
  const { id } = useParams();
  const property = properties.find((item) => (item._id || item.id) === id);

  if (!property) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-20 text-center text-slate-300">
        <h1 className="text-4xl font-semibold text-white">Property not found</h1>
        <p className="mt-4">Return to the listings to explore premium addresses.</p>
        <Link to="/listings" className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-accent2">
          Browse Properties
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-8">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glass">
            <div className="relative overflow-hidden rounded-3xl">
              <img src={property.image} alt={property.title} className="h-96 w-full object-cover" />
              <button
                onClick={() => toggleFavorite(property._id || property.id)}
                className="absolute right-6 top-6 rounded-full bg-slate-950/80 p-3 text-white transition hover:bg-slate-900"
              >
                {favorites.has(property._id || property.id) ? '★ Saved' : '☆ Save'}
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="section-heading">{property.type}</span>
                <h1 className="mt-2 text-4xl font-semibold text-white">{property.title}</h1>
                <p className="mt-3 text-slate-300">{property.neighborhood} • {property.location}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-right">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Price</p>
                <p className="mt-3 text-3xl font-semibold text-white">{formatCurrency(property.price)}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="glass-panel rounded-[32px] p-8">
              <span className="section-heading">Overview</span>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/75 p-5">
                  <p className="text-sm text-slate-400">Area</p>
                  <p className="mt-2 text-xl font-semibold text-white">{property.area} sqft</p>
                </div>
                <div className="rounded-3xl bg-slate-950/75 p-5">
                  <p className="text-sm text-slate-400">Status</p>
                  <p className="mt-2 text-xl font-semibold text-white">{property.status}</p>
                </div>
              </div>
              <div className="mt-6 text-slate-300">{property.description}</div>
            </div>

            <div className="glass-panel rounded-[32px] p-8">
              <span className="section-heading">Agent Contact</span>
              <div className="mt-5 space-y-4 text-slate-300">
                <div>
                  <p className="text-sm text-slate-400">Agent</p>
                  <p className="mt-2 text-lg font-semibold text-white">{property.agent?.name || 'MannatSpaces Agent'}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-2 text-lg">{property.agent?.phone || '+91 98765 43210'}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-2 text-lg">{property.agent?.email || 'agent@mannatspaces.in'}</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-3xl bg-accent px-5 py-4 font-semibold text-slate-950 transition hover:bg-accent2">
                Request Site Visit
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-[32px] p-8">
            <span className="section-heading">Gallery</span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {(property.gallery || []).map((src) => (
                <img key={src} src={src} alt={property.title} className="h-64 w-full rounded-3xl object-cover" />
              ))}
            </div>
          </div>

          <MapSection location={property.location} />
        </div>

        <aside className="space-y-6">
          <div className="glass-panel rounded-[32px] p-8">
            <span className="section-heading">Quick Details</span>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="rounded-3xl bg-slate-950/75 p-4">
                <div className="font-semibold text-white">Bedrooms</div>
                <div>{property.bedrooms ?? 'N/A'}</div>
              </li>
              <li className="rounded-3xl bg-slate-950/75 p-4">
                <div className="font-semibold text-white">Bathrooms</div>
                <div>{property.baths ?? 'N/A'}</div>
              </li>
              <li className="rounded-3xl bg-slate-950/75 p-4">
                <div className="font-semibold text-white">Neighborhood</div>
                <div>{property.neighborhood}</div>
              </li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <span className="section-heading">Need help?</span>
            <p className="mt-4 text-slate-300">Connect with an expert agent for personalized recommendations and financing support.</p>
            <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-accent px-5 py-4 text-sm font-semibold text-slate-950 hover:bg-accent2">
              Contact Agent
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default PropertyDetailsPage;
