const router = require("express").Router();
const stripeAPI = require("stripe")("sk_test_51KLN11ITl57zrxjublXL4K8jF2bmI6yVwtSi9i8HWDp691IYFqgye4fg8D0lzps4uoJl67y3WQCNHP9ziecQtu4600z5MYfWCo");

router.post("/", async (req, res) => {
    const domainUrl = process.send.LOCAL_URL || "http://localhost:3000";
    const { line_items, customer_email } = req.body;
    // Check req.body for customer email and products
    if (!line_items || !customer_email) {
        return res.status(400).json({ msg: "Missing required information" })
    }
    let session;
    try {
        session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",
            line_items,
            customer_email,
            success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainUrl}/canceled`,
            shipping_address_collection: { allowed_countries: ["GB", "US"] }
        });
        res.status(200).json({ sessionId: session.id });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;