const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const userData = db.collection("userData");
// /create
router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const queryParams = req.query;

console.log("queryParams", queryParams);
res.send(queryParams);

  userData
    .doc(queryParams.id)
    .set(queryParams)
    .then(function (doc) {
      res.send({ success: "Successful submission" });
    })
    .catch(function (error) {
      console.log("Error", error);
      res.send(`Error Submitting: ${error.toString()}`);
    });
});
module.exports = router;