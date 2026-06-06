import Navbar from "../components/layout/Navbar";
import StatsCard from "../components/dashboard/StatsCard";
import ChartCard from "../components/charts/ChartCard";
import EventTypeChart from "../components/charts/EventTypeChart";
import SeverityPieChart from "../components/charts/SeverityPieChart";
import RecentEventsTable from "../components/dashboard/RecentEventsTable";
import LiveAlertsPanel from "../components/alerts/LiveAlertsPanel";
import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import { getDashboardStats } from "../services/dashboardService";


function DashboardPage() {
    const [events, setEvents] = useState([]);
    const [stats, setStats] = useState({
        totalEvents: 0,
        highSeverity: 0,
        mediumSeverity: 0,
        lowSeverity: 0,
    });
    useEffect(() => {
        loadEvents();
        loadStats();
    }, []);

    const loadEvents = async () => {
        try {
            const data = await getEvents();
            setEvents(data);
        } catch (error) {
            console.error("Failed to load events", error);
        }
    };const loadStats = async () => {
        try {
            const data = await getDashboardStats();
            setStats(data);
        } catch (error) {
            console.error(
                "Failed to load dashboard stats",
                error
            );
        }
    };
    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />

            <main className="mx-auto max-w-7xl p-6">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Security Operations Center
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Monitor threats, alerts and security events in real time.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <StatsCard
                        title="Total Events"
                        value={stats.totalEvents}
                        color="#f8fafc"
                    />

                    <StatsCard
                        title="High Severity"
                        value={stats.highSeverity}
                        color="#ef4444"
                    />

                    <StatsCard
                        title="Medium Severity"
                        value={stats.mediumSeverity}
                        color="#f59e0b"
                    />

                    <StatsCard
                        title="Low Severity"
                        value={stats.lowSeverity}
                        color="#22c55e"
                    />
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                    <ChartCard title="Event Type Distribution">
                        <EventTypeChart />
                    </ChartCard>

                    <ChartCard title="Severity Distribution">
                        <SeverityPieChart />
                    </ChartCard>

                </div>
                <div className="mt-8 grid gap-6 xl:grid-cols-3">

                    <div className="xl:col-span-2">
                        <RecentEventsTable events={events} />
                    </div>

                    <div>
                        <LiveAlertsPanel />
                    </div>

                </div>
            </main>
        </div>
    );
}

export default DashboardPage;