import axiosClient from "../api/axiosClient";

export const getDashboardStats = async () => {
    const response = await axiosClient.get(
        "/api/dashboard/stats"
    );

    return response.data;
};
export const getEventTypes = async () => {
    const response = await axiosClient.get(
        "/api/dashboard/event-types"
    );

    return response.data;
};
export const getSeverityDistribution = async () => {
    const response = await axiosClient.get(
        "/api/dashboard/severity-distribution"
    );

    return response.data;
};