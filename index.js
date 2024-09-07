const mongoose = require('mongoose');
const express = require('express');
const app = express();
const productRoute = require('./routes/product.route.js');

//Middleware For JSON Requests Body
app.use(express.json());
//Middleware For Form URL Encoded Requests Body
app.use(express.urlencoded({ extended: false }));

app.use("/api/product", productRoute);

app.get('/', (req, res) => {
    res.send("Hello From Node API");
});


mongoose.connect("mongodb+srv://shaheen:2000168123@backenddb.kgouq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to Mongo");
    app.listen(3000, () => {
        console.log('Server Is Running on port 3000');
    });
})
.catch(() => {
    console.log("Couldn't connect to Mongo");
});
