function MapSection({ location }) {
  const query = encodeURIComponent(location || 'Mumbai');
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`
    : `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="glass-panel rounded-[32px] p-8">
      <span className="section-heading">Location Preview</span>
      <div className="mt-6 h-96 overflow-hidden rounded-3xl border border-white/10">
        <iframe
          title="Property location"
          src={src}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default MapSection;
