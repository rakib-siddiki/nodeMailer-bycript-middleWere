// this is index file

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userlist = require("./model/userSchema");
const bcrypt = require("bcrypt");
const sendEmailVerification = require("./utils/emailVerification");
const TestMiddleWere = require("./utils/middlewere.js");
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb+srv://rakib-siddiki:rakib-siddiki@cluster0.bj8fekt.mongodb.net/users?retryWrites=true&w=majority")
  .then(console.log("connected"));

app.listen(port, console.log("this port is runnig"));

app.get("/users",TestMiddleWere, async (req,res) => {
  try {
    const mongoUsers= await userlist.find()
    res.send(mongoUsers)
  } catch (error) {
    console.log(error);
  }
});
app.post("/users", function (req, res) {
  const { fName, lName, email, password } = req.body;
  bcrypt.hash(password, 10, function (err, hash) {
    if (err) {
      console.log(err)
    } else {
       const newUsers = new userlist({
      fName,
      lName,
      email,
      password:hash,
    });
    newUsers.save();
    sendEmailVerification(email)
    }
   
  });
 
  res.send(req.body);
});
