const router = require("express").Router();
const Product = require("../Models/Product");
const { verifyTokenAndAdmin } = require('../verifyToken');

// Get all products
router.get('/', async (req,res) => {
    let products;
    try {
        products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
    }
});

// Get Single Product
router.get("/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;