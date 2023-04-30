import { connectDB } from "../../utils/features"



export const POST = async (req) => {
    try{
        await connectDB();
    }
    catch(error){}
}