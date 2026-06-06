function StatsCard({ title, value, color }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700">
            <p className="text-sm text-slate-400">
                {title}
            </p>

            <h3
                className="mt-4 text-4xl font-bold"
                style={{ color }}
            >
                {value}
            </h3>
        </div>
    );
}

export default StatsCard;