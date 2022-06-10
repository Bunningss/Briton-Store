const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    _userId: {
        type: String,
        required: true,
        ref: "user"
    },
    token: {
        type: String,
        required: true,
        expiresAt: {
            type: Date,
            default: Date.now(),
            index: {
                expires: 86400000
            }
        }
    }
});

module.exports = mongoose.model("token", tokenSchema);