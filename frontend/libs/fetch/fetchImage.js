import instance from "../axios";

const getAllImages = async () => {
    try {
        console.log(`fetching images...`)
        const response = await instance.get('/images');
        console.log(`Images fetched sucessfully`)
        return response.data
    } catch (error) {
        console.error(`Error Fetching Images`, error)
    }
};

const getOneImages = async (id) => {
    try {
        console.log(`fetching images...`)
        const response = await instance.get(`/images/${id}`);
        console.log(`Images fetched sucessfully`)
        return response.data
    } catch (error) {
        console.error(`Error Fetching Images`, error)
    }
};

const getUserImages = async (id) => {
    try {
        console.log(`fetching images...`)
        const response = await instance.get(`/images/user-images`);
        console.log(`Images fetched sucessfully`)
        return response.data
    } catch (error) {
        console.error(`Error Fetching Images`, error)
    }
};

const createImage = async (data) => {
    try {
        console.log(`Creating image...`)
        const response = await instance.post('/images', data);
        console.log(`Image created sucessfully`)
        return response.data
    } catch (error) {
        console.error(`Error Creating Image`, error.message)
    }
};

const updateImage = async (id, data) => {
    try {
        console.log(`Updating image...`)
        const response = await instance.put(`/images/${id}`, data);
        console.log(`Image updated sucessfully`)
        return response.data
    } catch (error) {
        console.error(`Error Updating Image`, error)
    }
};

const deleteImage = async (id) => {
    try {
        console.log(`Deleting image...`)
        const response = await instance.delete(`/images/${id}`);
        console.log(`Image deleted sucessfully`)
        return response.data
    } catch (error) {
        console.error(`Error Deleting Image`, error)
    }
};

export { getAllImages, getOneImages, getUserImages, createImage, updateImage, deleteImage }