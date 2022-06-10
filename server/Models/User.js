const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        maxlength: 30,
        lowercase: true
    },
    phone: {
        type: Number,
        minlength: 7
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 56
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isModerator: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Users", userSchema);