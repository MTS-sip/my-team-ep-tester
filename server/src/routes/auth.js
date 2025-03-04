import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import { User } from "../models/user.js";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Generate JWT Token for the new user
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || "your_secret_key", // Use a secure secret key
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      token, // Return JWT token
    });
  } catch (error) {
    return res.status(500).json({ message: "Error registering user", error });
  }
});

//  Login Route (Using JWT)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token for login
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "your_secret_key",
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error });
  }
});

export default router;


