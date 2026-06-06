function ChartCard({ title, children }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">
                {title}
            </h3>

            {children}
        </div>
    );
}

export default ChartCard;