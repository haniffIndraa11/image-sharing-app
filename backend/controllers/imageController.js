const { Image } = require('../models');

const getAllImages = async (req, res) => {
    try {
        const images = await Image.findAll();
        res.status(200).json({ message: 'Success fetching images', images });
    } catch (error) {
        res.status(400).json({ error: `Failed to get images`, message: error.message });
    }
};

const getUserImages = async (req, res) => {
    try {
        const images = await Image.findAll({ where: { user_id: req.loggedUser.id } });
        res.status(200).json({ message: 'Success fetching images', images });
    } catch (error) {
        res.status(400).json({ error: `Failed to get images`, message: error.message });
    }
};

const getImageById = async (req, res) => {
    try {
        const image = await Image.findOne({ where: { id: req.params.id } });
        if (image) {
            res.status(200).json({ message: `Image found`, image });
        } else {
            res.status(404).json({ message: 'Image not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createImage = async (req, res) => {

    // console.log("File:", req.file.path);
    // console.log("Body:", req.body);

    try {
        console.log(`MASUUK SINI`)
        if (!req.file) {
            console.log(`req.file tidak masuk`)
            return res.status(400).json({ message: 'No file uploaded or invalid file type' });
        }

        const { caption, image_urll } = req.body;
        const userId = req.loggedUser.id;
        const imageUrl = req.file.path;
        const username = req.loggedUser.username;

        const image = await Image.create({
            user_id: userId,
            image_url: imageUrl || image_urll,
            caption: caption || `Uploaded by ${username}`
        });

        res.status(200).json({ message: 'Image created', image });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateImage = async (req, res) => {
    try {
        const { id } = req.params;
        const user_id = req.loggedUser.id;

        if (req.file) {
            req.body.image_url = req.file.path;
        }

        const [updated] = await Image.update(req.body, { where: { id, user_id } });

        if (updated) {
            const updatedImage = await Image.findByPk(id);
            res.json(updatedImage);
        } else {
            res.status(404).json({ message: 'Image not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteImage = async (req, res) => {
    try {
        const deleted = await Image.destroy({ where: { id: req.params.id, user_id: req.loggedUser.id } });
        if (deleted) {
            res.status(200).json({ message: `Image with ID ${req.params.id} deleted successfully` });
        } else {
            res.status(404).json({ message: 'Image not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllImages,
    getUserImages,
    getImageById,
    createImage,
    updateImage,
    deleteImage,
}