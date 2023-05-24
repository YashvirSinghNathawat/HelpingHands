import { asyncError, errorHandler } from "../../../middlewares/error";
import { User } from "../../../models/user";
import { connectDB, cookieSetter, generateToken, sendPasswordResetEmail } from "../../../utils/features";
require('dotenv').config({path: '../.env.local'});
import jwt from "jsonwebtoken"


const handler = asyncError(async (req, res) => {

  if(req.method !== "POST")  return errorHandler(res,400,"Only Post Method is allowed");
  const { email } = req.body;

  if ( !email)
    return errorHandler(res, 400, "Please Enter all the fields");
  await connectDB();
  const user = await User.findOne({ email }).select("+password");;

  if (!user) return errorHandler(res, 400, "User not found");
  
  const token = generateToken(user._id);
  const result = await sendPasswordResetEmail(email,token);
  console.log(result);
  if(result){
    res.status(200).json({ message: 'Password reset email sent' ,success: true });
  }
  else{
    res.status(424).json({ message: 'Email Not Sent' , success:false});
  }
});


export default handler;
