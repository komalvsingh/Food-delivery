import Users from './usermodel.js'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); 

export const signin = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    // Create a token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ success: true, authData: token, message: "User logged in successfully" });
  } catch (err) {
    next(err);
  }
};
