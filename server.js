var logger = require('morgan')
const express = require("express");
const cors = require("cors")

const dp = require("./db")
const Pizza = require('./models/pizzaModel')

const app = express();

app.use(express.json());    // used for body parser
app.use(cors())

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use(logger("tiny"))

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)


app.get("/", (req,res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("sever working....");
})


const port = process.env.PORT || 8000;

app.listen(port, () => 'server running on port 8000... ')
