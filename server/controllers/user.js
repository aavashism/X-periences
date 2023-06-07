// Import necessary modules
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Import UserModal from models directory
import UserModal from "../models/user.js";


// Set the secret key used for JWT authentication
const secret = 'test';


// Sign in user with email and password
export const signin = async (req, res) => {
// Get email and password from the request body
  const { email, password } = req.body;

  try {
// Find user by email in the database
    const oldUser = await UserModal.findOne({ email });
// If user does not exist, return a 404 error

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

// Check if the provided password matches the hashed password in the database
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

// If password does not match, return a 400 error
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

// Sign a new JWT token with user email and id, and set expiration time to 1 hour
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {

// Return a 500 error if there is an internal server error, and log the error message
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};