const express= require ("express");
const cors= require ("cors");
const mongoose =require ("mongoose");
const bodyParser= require ("body-parser");
const app= express();

//middlewares
app.use(cors());
app.unsubscribe(body.Parser.json());

//connect to Mongo
mongoose.connect("mongodb://127.0.0.1:4924/users",
{ userNewUrlParser: true}); Athziri
const connection = mongoose.connection;
connection.once("open",() => {
    console.log ("MongoDB Connection established Successfully");
});

//add user as base route
app.use ("/user,userRoutes");

//Create Server
app.listen(3000, () => {
    console.log("server is running in port 3000")
})
