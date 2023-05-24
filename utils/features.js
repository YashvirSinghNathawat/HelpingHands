import mongoose from "mongoose";
require("dotenv").config({ path: "../.env.local" });
const nodemailer = require("nodemailer");
import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "helpinghands",
  });
  console.log(`Database Connected on ${connection.host}`);
};

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token", set ? token : "", {
      path: "/",
      httpOnly: true,
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    })
  );
};
export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};

export const checkAuth = async (req) => {
  const cookie = req.headers.cookie;

  if (!cookie) return null;
  const token = cookie.split("=")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return await User.findById(decoded._id);
};

export const sendPasswordResetEmail = async (email, token) => {

  //Connect with SMTP server
  
  const transporter = await nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.SEND_MAIL,
        pass: process.env.SEND_PASS
    }
});
  
  // Compose the email content with the token embedded in the URL
  const resetUrl = `${process.env.BASE_URL}/resetPassword?token=${token}&email=${email}`;
  console.log(email);
  const mailOptions = {
    from: "Helping Hands",
    to: email,
    subject: "Password Reset",
    text: `Click the following link to reset your password: ${resetUrl}`,
  };

  // // Send the email
  let info = await transporter.sendMail(mailOptions);
  return info;

};
