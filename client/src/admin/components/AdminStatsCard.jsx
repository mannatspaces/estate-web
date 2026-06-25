function AdminStatsCard({ label, value }) {
  return (
    <div className="bg-slate-950 border border-slate-700 rounded-[24px] p-6 shadow-md">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
        {label}
      </p>

      <p className="mt-3 text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}

export default AdminStatsCard;