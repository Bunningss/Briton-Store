const router = require("express").Router();
const Subscriber = require("../Models/Newsletter");

router.post("/", async (req, res) => {
    try {
        const existSub = await Subscriber.findOne({ email: req.body.email });
        if (existSub) {
            return res.status(500).json({ msg: "Already Subscribed To Newsletter. "})
        } else {
            const sub = new Subscriber({
                name: req.body.name,
                email: req.body.email
            });
            await sub.save();
            res.status(200).json({ msg: "Subscription Successful." })
        }
    } catch (err) {
        res.status(400).json(err.message)
    }
});

module.exports = router;