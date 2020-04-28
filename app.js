const express = require("express");
const app = express(); 
const port = process.env.PORT || 4000;

const dashboardRoute = require("./routes/dashboard.js"); 

app.use("/", dashboardRoute); 

app.listen(port, ()=>
    console.log(`example app listening at http://localhost:${port}`)
); 

//https://whispering-tor-40157.herokuapp.com/
//https://git.heroku.com/whispering-tor-40157.git