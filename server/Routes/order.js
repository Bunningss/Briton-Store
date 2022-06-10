const router = require("express").Router();
const Order = require('../Models/Order');
const { verifyToken } = require("../verifyToken");

// Place Order
router.post("/", verifyToken, async (req, res) => {
    try { 
        let order = new Order(req.body);
        let newOrder = await order.save();
        res.status(200).json(newOrder)
    } catch (err) {
        res.status(500).json(err.message)
    }
});

module.exports = router;