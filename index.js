const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();

const app = express();

//port
const PORT = process.env.PORT || 4000;

//middleware
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.json({message : "API working"});
})


//routes
app.use("/user", user);

app.listen(PORT, (req,res) => {
    console.log(`server started at PORT ${PORT}`);
})