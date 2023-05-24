import { asyncError, errorHandler } from "../../../middlewares/error";
import { User } from "../../../models/user";
import { connectDB, cookieSetter, generateToken } from "../../../utils/features";
require('dotenv').config({path: '../.env.local'});
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {

  if(req.method !== "POST")  return errorHandler(res,400,"Only POST Method is allowed");
  const {  token,password,email } = req.body;
  if ( !token || !password || !email)
    return errorHandler(res, 400, "Please Enter all the fields");
  await connectDB();
  const hashedPassword = await bcrypt.hash(password,10);
  await User.findOneAndUpdate({ email }, { password: hashedPassword });

  res.status(200).json({
      success: true,
      message: "Password Set Successfully",
    })
});


export default handler;
