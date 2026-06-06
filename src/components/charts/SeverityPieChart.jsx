import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import { getSeverityDistribution } from "../../services/dashboardService";

const COLORS = [
    "#ef4444",
    "#f59e0b",
    "#22c55e",
];

function SeverityPieChart() {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadSeverityDistribution();
    }, []);

    const loadSeverityDistribution = async () => {
        try {

            const response =
                await getSeverityDistribution();

            const formattedData = [
                {
                    name: "HIGH",
                    value: response.HIGH || 0,
                },
                {
                    name: "MEDIUM",
                    value: response.MEDIUM || 0,
                },
                {
                    name: "LOW",
                    value: response.LOW || 0,
                },
            ];

            setData(formattedData);

        } catch (error) {
            console.error(
                "Failed to load severity distribution",
                error
            );
        }
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={COLORS[index]}
                        />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default SeverityPieChart;