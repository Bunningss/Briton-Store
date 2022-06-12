const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Subscribers", newsletterSchema);