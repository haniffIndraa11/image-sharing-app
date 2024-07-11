const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users.length === 0) {
            throw { name: "ErrorNotFound", message: "User not found" }
        }
        res.status(200).json({ message: "Success", users })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}   

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: `User with ID ${id} deleted successfully` });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getAllUsers, getUserById, deleteUser }