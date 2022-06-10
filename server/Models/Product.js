const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    feature: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model("Products", productSchema);