const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    products: [
        {
            productName: {
                type: String,
                required: true
            },
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ]
});