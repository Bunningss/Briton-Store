const router = require('express').Router();
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
const Token = require('../Models/Token');
const nodemailer = require('nodemailer');

// Random Numbers
const randomNumber = () => {
    return Math.random() * (200 - 10 + 1) + 10;
}

// Register User
router.post('/register', async (req, res) => {
    try {
        const existUser = await User.findOne({ email: req.body.email });
        if (existUser) {
            return res.status(500).json({ msg: "Email Already Exist" });
        } else {
            try {
                let user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SEC).toString()
                });
                await user.save();
                try {
                    const token = new Token({
                        _userId: user._id,
                        token: randomNumber()
                    });
                    await token.save();
                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: { user: "authmail14@gmail.com",pass: "ICUIFORCUa1@" }
                    });
                    const mailOptions = {
                        from: "authmail14@gmail.com",
                        to: user.email,
                        subject: "Briton Store Account Verification",
                        text: 'Hello '+ user.name +',\n\n' + 'Click The Link Below To Verify Your Account. \nhttps:\/\/' + 'www.woow.group' + '\/auth/confirmation\/' + user.email + '\/' + token.token + '\n\nThank You!\n'
                    }
                    res.status(200).json({ msg: "Registration Successful" })
                } catch (err) {
                    console.log(err)
                }
            } catch (err) {
                console.log(err)
            }
        }
    } catch (err) {
        console.log(err)
    }
});

// Find User Only
router.post("/user", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json({ msg: "User Not Found" })
        } else {
            return res.status(200).json({ msg: "User Account Found" })
        }
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
});

// Login
router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(500).json({ msg: "Invalid email or password" })
        } else {
            try {
                    const pass = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SEC).toString(CryptoJS.enc.Utf8)
                    if (pass !== req.body.password) {
                        return res.status(500).json({ msg: "Invalid password" })
                    } else {
                        try {
                            const accessToken = jwt.sign({
                                id: user._id,
                                isAdmin: user.isAdmin,
                                isModerator: user.isModerator
                            }, process.env.JWT_SEC, { expiresIn: "60m" })
                            const { password, isAdmin, verified, isModerator, createdAt, ...info } = user._doc
                            res.status(200).json({ info, accessToken })
                        } catch (err) {
                            res.status(500).json({ msg: err.message })
                        }
                    }
            } catch (err) {
                res.status(500).json({ msg: err.message })
            }
        }
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
})

module.exports = router;