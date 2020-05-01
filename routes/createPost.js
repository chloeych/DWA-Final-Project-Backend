const express = require("express"); 

const router = express.Router(); 
// Include Firebase 
const firebase = require("firebase");
// Initialize Firestore Database 
const db = firebase.firestore();
// Reference to Collections 
const blogposts = db.collection("blogposts");

const form = `<form action="/create/submit">
<input type="text" name="title" placeholder="Title" />
<input type="file" name="image" placeholder="Photo" />
<input type="text" name="author" placeholder="Author" />
<button type="submit">Submit</button>
</form>`;

// /create
router.get("/", (req, res) => res.send(form));

// /create/submit
router.get("/submit", (req, res) =>{
 const queryParams = req.query
 const idFromTitle = queryParams.title.replace(/\s+/g, "-".toLowerCase());

 blogposts
    .doc()
    .set(queryParams)
    .then(function(doc) {
    res.send(
        "<h1>Submission Successful</h1><a href='/create'>Create another post </a></p>"
    );
    })
    .catch(function(error){
      console.log('Error', error);
      res.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;