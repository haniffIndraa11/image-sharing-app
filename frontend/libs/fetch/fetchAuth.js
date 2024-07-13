import instance from "../axios";

const login = async (data) => {
    try {
        const response = await instance.post("/auth/login", data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const register = async (data) => {
    try {
        const response = await instance.post("/auth/register", data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export { login, register }