const express = require("express");
const app = express();
const moongose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//MIDDLEWARE

app.use(cors());

app.use(bodyParser.json());

const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);


//ROUTES
app.get("/", (req,res) => {
    res.send("Hello World");
})


//CONNECT TO DB
moongose.connect(
    process.env.DB_CON,
    {useNewUrlParser: true }, 
    ()=> {console.log("connected to database...");
});

//LISTEN...
app.listen(9000);