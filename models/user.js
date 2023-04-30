import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email : {
        type: String,
        unique:true,
        required: true,
    },
    password : {
        type: String,
        select: false,
        required: true,
        minLength: [6,"Password too short"],
    }
});

mongoose.models = {};
export const User = mongoose.model("User",schema);