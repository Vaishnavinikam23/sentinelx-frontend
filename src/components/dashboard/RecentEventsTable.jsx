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

function RecentEventsTable({ events }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900">
            <div className="border-b border-slate-800 p-5">
                <h3 className="text-lg font-semibold text-white">
                    Recent Security Events
                </h3>
            </div>

            <div className="max-h-[400px] overflow-y-auto overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="border-b border-slate-800 text-left text-sm text-slate-400">
                        <th className="p-4">Event ID</th>
                        <th className="p-4">Event Type</th>
                        <th className="p-4">Severity</th>
                        <th className="p-4">Source IP</th>
                        <th className="p-4">Message</th>
                        <th className="p-4">Timestamp</th>
                    </tr>
                    </thead>

                    <tbody>
                    {events.map((event) => (
                        <tr
                            key={event.id}
                            className="border-b border-slate-800 hover:bg-slate-800/40"
                        >
                            <td className="p-4 text-slate-300">
                                {event.id}
                            </td>

                            <td className="p-4 text-white">
                                {event.eventType}
                            </td>

                            <td
                                className={`p-4 font-semibold ${getSeverityClass(
                                    event.severity
                                )}`}
                            >
                                {event.severity}
                            </td>

                            <td className="p-4 text-slate-300">
                                {event.sourceIp}
                            </td>
                            <td className="p-4 text-slate-300">
                                {event.message}
                            </td>
                            <td className="p-4 text-slate-300">
                                {new Date(event.timestamp).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecentEventsTable;