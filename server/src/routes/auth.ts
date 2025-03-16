import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

/**
 * ✅ User Login Route
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; // Using email instead of username for consistency

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Find user by email (Ensure email is unique)
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "your_secret_key",
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    return res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("❌ Error during login:", error);
    return res.status(500).json({ message: "Error logging in", error });
  }
});

/**
 * Register Route
 */
router.post("/register", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password required" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "That user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, username, email, password: hashedPassword });

    // Generate JWT Token for the new user
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || "your_secret_key",
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      token, // Return JWT token
    });
  } catch (error) {
    console.error("❌ Error registering user:", error);
    return res.status(500).json({ message: "Error registering user", error });
  }
});

export default router;