const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const userData = db.collection("userData");

router.get("/", (req,res)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

const userDataArray = []; 

userData 
 .get()
 .then((querySnapshot)=>{
    querySnapshot.forEach((doc) => {
      userDataArray.push(doc.data());
     });
    return res.send(userDataArray);
     })  
 .catch(function(error){
    console.log('Error:', error);
    return res.send(error);
    });
});


module.exports = router; 