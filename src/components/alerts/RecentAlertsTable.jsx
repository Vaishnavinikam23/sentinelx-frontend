function getSeverityClass(severity) {
    switch (severity) {
        case "HIGH":
            return "text-red-400";
        case "MEDIUM":
            return "text-amber-400";
        case "LOW":
            return "text-green-400";
        default:
            return "text-slate-300";
    }
}
function RecentAlertsTable({ alerts }) {

    console.log("ALERTS:", alerts);

    return (

        <div className="rounded-xl border border-slate-800 bg-slate-900 mt-6">

            <div className="border-b border-slate-800 p-5">
                <h3 className="text-lg font-semibold text-white">
                    Recent Security Alerts
                </h3>
            </div>

            <div className="max-h-[400px] overflow-y-auto overflow-x-auto">

                <table className="w-full">

                    <thead>
                    <tr className="border-b border-slate-800 text-left text-sm text-slate-400">
                        <th className="p-4">Alert Type</th>
                        <th className="p-4">Severity</th>
                        <th className="p-4">Source IP</th>
                        <th className="p-4">Description</th>
                        <th className="p-4">Created At</th>
                    </tr>
                    </thead>

                    <tbody>

                    {alerts.map((alert) => (
                        <tr key={alert.id}>
                            <td className="p-4">{String(alert.alertType)}</td>
                            <td className="p-4">{String(alert.severity)}</td>
                            <td className="p-4">{String(alert.sourceIp)}</td>
                            <td className="p-4">{String(alert.description)}</td>
                            <td className="p-4"> {new Date(alert.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}

                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default RecentAlertsTable;