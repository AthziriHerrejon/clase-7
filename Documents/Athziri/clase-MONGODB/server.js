const express= require ("express");
const cors= require ("cors");
const mongoose =require ("mongoose");

const app = express ();
//middlewares
app.use(cors());
app.unsubscribe(body.Parser.json());

//connect to Mongo
mongoose.connect("mongodb://127.0.0.1:4924/users");
const connection = mongoose.connection;
connection.once("open",() => {
    console.log ("MongoDB Connection established Successfully");
});

//Create Server
app.listen
