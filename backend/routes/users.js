//7. express router
const router = require("express").Router();
//7. mongoose router
let User = require("../models/user.model");

//7. first route for get request
router.route("/").get((req, res) => {
  //7. find() mongoose method from the mongoDB Atlas DB
  User.find()
    //7. to return json format else give error
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

//7. POST request
router.route("/add").post((req, res) => {
  const username = req.body.username;
  //7. new instance of user
  const newUser = new User({ username });
  //7. save a user or else return error
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
