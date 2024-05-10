const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://zk7766280:XVpVM3eg0ZinHAY9@cluster0.bfinqfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser : true
        });
        console.log("connected to db!");
    } catch(e) {
        console.log(e);
        throw e;
    }
}

module.exports = InitiateMongoServer;