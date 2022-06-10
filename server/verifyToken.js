const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.token.split(" ")[1];
    if(token) {
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) {
                return res.status(403).json({ msg: "An Error Occured" })
            } else {
                req.user = user;
                next();
            }
        })
    } else {
        return res.status(401).json({ msg: "You Are Not Authorized" })
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req,res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json({ msg: "You Are Not Authorized" })
        }
    })
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json({ msg: "Restricted Access Only" })
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization };