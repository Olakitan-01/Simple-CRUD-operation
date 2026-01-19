const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User's name is require"]
    },
    email: {
        type: String,
        required: [true, "User's email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "User's password is required"]
    }
},
{timestamps: true}
)
module.exports = mongoose.model("User", userSchema);