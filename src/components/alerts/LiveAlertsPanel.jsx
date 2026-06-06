import { useEffect, useState } from "react";
import { connectWebSocket } from "../../services/websocketService";

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

    const [alerts, setAlerts] = useState([]);

    useEffect(() => {

        connectWebSocket((newAlert) => {

            setAlerts((prev) => [
                {
                    ...newAlert,
                    id: Date.now(),
                    time: new Date().toLocaleTimeString(),
                },
                ...prev,
            ]);
        });

    }, []);

    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900">

            <div className="border-b border-slate-800 p-5">
                <h3 className="text-lg font-semibold text-white">
                    Live Security Alerts
                </h3>
            </div>

            <div className="max-h-[400px] overflow-y-auto">

                {alerts.length === 0 && (
                    <div className="p-4 text-slate-400">
                        Waiting for alerts...
                    </div>
                )}

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

                        <p className="mt-1 text-sm text-slate-500">
                            {alert.message}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default LiveAlertsPanel;