const alerts = [
    {
        id: 1,
        eventType: "PORT_SCAN",
        severity: "HIGH",
        time: "18:21:14",
    },
    {
        id: 2,
        eventType: "BRUTE_FORCE",
        severity: "MEDIUM",
        time: "18:18:52",
    },
    {
        id: 3,
        eventType: "MALWARE",
        severity: "HIGH",
        time: "18:14:30",
    },
    {
        id: 4,
        eventType: "DDOS",
        severity: "LOW",
        time: "18:10:05",
    },
];

function getSeverityColor(severity) {
    switch (severity) {
        case "HIGH":
            return "border-l-red-500";
        case "MEDIUM":
            return "border-l-amber-500";
        case "LOW":
            return "border-l-green-500";
        default:
            return "border-l-slate-500";
    }
}

function LiveAlertsPanel() {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900">
            <div className="border-b border-slate-800 p-5">
                <h3 className="text-lg font-semibold text-white">
                    Live Security Alerts
                </h3>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`border-l-4 ${getSeverityColor(
                            alert.severity
                        )} border-b border-slate-800 p-4`}
                    >
                        <div className="flex items-center justify-between">
              <span className="font-medium text-white">
                {alert.eventType}
              </span>

                            <span className="text-xs text-slate-400">
                {alert.time}
              </span>
                        </div>

                        <p className="mt-2 text-sm text-slate-400">
                            Severity: {alert.severity}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LiveAlertsPanel;