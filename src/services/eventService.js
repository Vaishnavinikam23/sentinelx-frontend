import axiosClient from "../api/axiosClient";

export const getEvents = async () => {
    const response = await axiosClient.get("/api/events");
    return response.data;
};