function AdminStatsCard({ label, value }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-md">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
        {label}
      </p>

      <p className="mt-3 text-3xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

export default AdminStatsCard;