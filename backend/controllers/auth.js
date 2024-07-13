const { User } = require('../models');
const bcrypt = require('bcrypt');
const { generateToken } = require('../lib/jwt')

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const findEmail = await User.findOne({ where: { email } });
    if (findEmail) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).json({ error: 'An error occurred while creating the user' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(404).json({ error: 'Invalid email or password' });
    }
    const token = generateToken({ id: user.id, email: user.email });
    res.status(200).json({ token });
  } catch (error) {
    res.status(404).json({ error: 'An error occurred while logging in' });
  }
};

module.exports = { register, login };