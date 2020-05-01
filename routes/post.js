const express = require("express"); 

const router = express.Router(); 

// Req Firebase
const firebase = require("firebase");

// Initialize Firestore Database 
const db = firebase.firestore();

const blogposts = db.collection("blogposts");

// Get single blog post 
const documentToGet = "sample";
router.get("/", (req, res) => res.send("Post Page Loaded Successfully"));
router.get("/:id", (req, res) => {
    const queryId = req.params.queryId;
    blogposts
    .doc(queryId)
    .get()
    .then(function(doc){
     if(doc.exists){
        return res.send(doc.data());
     } else{
        return res.send("No such document!");
     }
})
.catch(function(error){
    console.log("Error:", error);
    return res.send(error);
    });
});




module.exports = router;