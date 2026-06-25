import { Link } from 'react-router-dom';

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function PropertyCard({ property, isFavorite, toggleFavorite }) {
  const propertyId = property._id || property.id;

  return (
   <article className="group overflow-hidden rounded-[32px] border border-slate-700 bg-slate-950 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden rounded-t-[32px]">
        <img src={property.image} alt={property.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
       <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg">
          {property.type}
        </span>
        <button
          onClick={() => toggleFavorite(propertyId)}
          className="absolute right-4 top-4 rounded-full bg-slate-950/10 px-3 py-2 text-sm text-white transition hover:bg-slate-950/20"
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">{property.title}</h2>
          <p className="text-sm text-slate-400">{property.neighborhood} · {property.location}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-semibold text-white">{formatCurrency(property.price)}</p>
            <p className="text-sm text-slate-400">{property.area} sqft</p>
          </div>
          <Link
            to={`/property/${propertyId}`}
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent2"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;
