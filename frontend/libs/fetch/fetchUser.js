import instance from "../axios";

const getAllUsers = async () => {
    try {
        console.log(`fetching users...`);
        const response = await instance.get("/users");
        console.log(`Users fetched sucessfully`);
        return response.data;
    } catch (error) {
        console.error(`Error Fetching Users`, error);
    }
};

const getUserById = async (id) => {
    try {
        console.log(`fetching user...`);
        const response = await instance.get(`/users/${id}`);
        console.log(`User fetched sucessfully`);
        return response.data;
    } catch (error) {
        console.error(`Error Fetching User`, error);
    }
};

const deleteUser = async (id) => {
    try {
        console.log(`Deleting user...`);
        const response = await instance.delete(`/users/${id}`);
        console.log(`User deleted sucessfully`);
        return response.data;
    } catch (error) {
        console.error(`Error Deleting User`, error);
    }
};

export { getAllUsers, getUserById, deleteUser }