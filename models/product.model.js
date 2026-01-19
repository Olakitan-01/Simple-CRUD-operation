const mongoose = require("mongoose");

const productSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product's name is require"]
    },
    price: {
        type: Number,
        required: [true, "Product's price is required"]
    },
    description: {
        type: String,
        
    },
    createdby: {
        type: String,
        required: [true, "Creator's name is required"]
    },
    inStock: {
        type: Boolean,
        default: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Product", productSchema);