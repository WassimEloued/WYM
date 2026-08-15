import api from "./api";


export async function registerUser(data: {
    role: "customer" | "agency" | "admin";
    email: string;
    password: string;
}) {
    const sanitizedData = {
        ...data,
        role: data.role ? (data.role.toLowerCase() as "customer" | "agency" | "admin") : "customer"
    };

    const response = await api.post("/auth/register", sanitizedData);

    return response.data;
}

export async function loginUser(data: {
    email: string;
    password: string;
}) {
    const response = await api.post("/auth/login", data);

    return response.data;
}

export async function logoutUser() {
    const response = await api.post("/auth/logout");

    return response.data;
}
