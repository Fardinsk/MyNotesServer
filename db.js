const mongoose = require('mongoose')
require("dotenv").config()
mongoose.set("strictQuery", false);


// const mongoURI = process.env.MONGO_URL
const server = "127.0.0.1:27017"
const database ="local"

const connecttoMongo = async ()=>{
   await mongoose.connect(`${process.env.MONGO_URL}`)
   console.log("Connect Mongodb Successfully")
}

module.exports = connecttoMongo