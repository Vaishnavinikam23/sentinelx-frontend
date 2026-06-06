import axiosClient from "../api/axiosClient";

export const getAlerts = async () => {
    const response = await axiosClient.get("/api/alerts");
    return response.data;
};