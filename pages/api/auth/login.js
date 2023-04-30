import { asyncError, errorHandler } from "../../../middlewares/error";
import { User } from "../../../models/user";
import { connectDB, cookieSetter, generateToken } from "../../../utils/features";
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {

  if(req.method !== "POST")  return errorHandler(res,400,"Only Post Method is allowed");
  const {  email, password } = req.body;

  if (  !email || !password)
    return errorHandler(res, 400, "Please Enter all the fields");
  await connectDB();
  const user = await User.findOne({ email }).select("+password");

  if (!user) return errorHandler(res, 400, "Invalid Email or Password");

        const isMatch = await bcrypt.compare(password,user.password);
  
        if (!isMatch) return errorHandler(res, 400, "Invalid Email or Password");
  
  const token = generateToken(user._id); 
  cookieSetter(res,token,true);
  res.status(200).json({
    success: true,
    message: `Welcome Back, ${user.name}`,
    user
  })

});


export default handler;
