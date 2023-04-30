import { connectDB } from "../utils/features"



const handler = async (req,res) => {

    await connectDB();
    res.json({
        success: true,
    });
};

export default handler;