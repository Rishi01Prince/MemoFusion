import User from '../models/User.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import { validationResult } from "express-validator";
import { OAuth2Client } from 'google-auth-library'; 
const jwtSecret = "MynameisRishiRajandInstant";
const client = new OAuth2Client("YOUR_GOOGLE_CLIENT_ID");
// Validate credentials for login
const isValidCredentials = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({ errors: "Please enter all fields" });
    }
    if (password.length < 5) {
        return res.status(400).json({ errors: "Password should be of minimum 5 characters" });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ errors: "Please enter a valid email" });
    }
    next();
};

// Fetch all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users: users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new user (for credential-based sign-up)
const CreateUser = async (req, res) => {
    try {
        const ifUserExist = await User.findOne({ email: req.body.email });
        if (ifUserExist) {
            return res.status(400).json({ errors: "User already exists" });
        }

        const errors = validationResult(req);
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location,
            pincode: req.body.pincode
        });

        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Login user (for credential-based login)
const loginUser = async (req, res) => {
    let email = req.body.email;
    try {
        const userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "User with given Email does not exist. Please proceed with signup" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
        if (!pwdCompare) {
            return res.status(400).json({ errors: "Incorrect Credentials" });
        }

        const payload = { user: { id: userData.id } };
        const authToken = jwt.sign(payload, jwtSecret, { expiresIn: '1h' }); 
        return res.json({ success: true, authToken: authToken, data: userData });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Handle Google Sign-In
const googleSignIn = async (req, res) => {
    const { token } = req.body; // Token from frontend (Google Sign-In)
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "YOUR_GOOGLE_CLIENT_ID", // Verify the client ID
        });

        const { name, email, sub: googleId } = ticket.getPayload();
        let userData = await User.findOne({ googleId });

        if (!userData) {
         
            userData = await User.create({
                name,
                email,
                googleId,
            });
        }

        const payload = { user: { id: userData.id } };
        const authToken = jwt.sign(payload, jwtSecret, { expiresIn: '1h' }); // Set expiration for JWT
        return res.json({ success: true, authToken: authToken, data: userData });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const UserMethods = {
    CreateUser,
    isValidCredentials,
    loginUser,
    getAllUsers,
    googleSignIn, // Added Google Sign-In method
};

export default UserMethods;
