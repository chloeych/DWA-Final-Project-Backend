const express = require("express");
const app = express(); 
const port = process.env.PORT || 4000;


const firebase = require('firebase');


const firebaseConfig = {
  apiKey: "AIzaSyBV6DxXt1G7u6aHW-1devVzlbNdLx-GVq0",
  authDomain: "final-project-dwa-d2cba.firebaseapp.com",
  databaseURL: "https://final-project-dwa-d2cba.firebaseio.com",
  projectId: "final-project-dwa-d2cba",
  storageBucket: "final-project-dwa-d2cba.appspot.com",
  messagingSenderId: "721781788829",
  appId: "1:721781788829:web:14027a9031baae902b8474",
};

firebase.initializeApp(firebaseConfig);

const dashboardRoute = require("./routes/dashboard.js"); 
const postRoute = require("./routes/post.js"); 
const createRoute = require("./routes/createPost.js");

app.use("/", dashboardRoute); 
app.use ("/post", postRoute); 
app.use("/create", createRoute);

app.listen(port, ()=>
    console.log(`example app chilling at http://localhost:${port}`)
); 
