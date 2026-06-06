import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import { getEventTypes } from "../../services/dashboardService";

function EventTypeChart() {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadEventTypes();
    }, []);

    const loadEventTypes = async () => {
        try {

            const response = await getEventTypes();

            const formattedData = Object.entries(response).map(
                ([name, count]) => ({
                    name,
                    count,
                })
            );

            setData(formattedData);

        } catch (error) {
            console.error(
                "Failed to load event types",
                error
            );
        }
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                />

                <YAxis
                    stroke="#94a3b8"
                />

                <Tooltip />

                <Bar
                    dataKey="count"
                    fill="#3b82f6"
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default EventTypeChart;;