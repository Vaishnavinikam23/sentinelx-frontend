import axiosClient from "../api/axiosClient";

export const login = async (credentials) => {
    const response = await axiosClient.post("/api/auth/login", credentials);
    return response.data;
};

export const signup = async (userData) => {
    const response = await axiosClient.post("/api/auth/signup", userData);
    return response.data;
};