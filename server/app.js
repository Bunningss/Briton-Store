const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require("path");
const cors = require("cors");

const authRoute = require('./Routes/auth');
const productRoute = require("./Routes/product");
const orderRoute = require('./Routes/order');
const newsletterRoute = require("./Routes/newsletter");

const app = express();
dotenv.config();

// Routes
app.use(express.json());
app.use(cors());
app.use('/auth', authRoute);
app.use("/products", productRoute);
app.use("/order", orderRoute);
app.use("/news", newsletterRoute);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Online.")
});

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
  }

if (process.env.NODE_ENV === "production") { 
    app.use(express.static("client/build")); 
    app.get("*", (req, res) => { 
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Online at ${PORT}`);
});