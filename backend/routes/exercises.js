//8. similar to users.js
const router = require("express").Router();
let Exercise = require("../models/exercise.model");
//8. GET request
router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: " + err));
});
//8. POST request
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  //8. create new instance of exercise
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });
  //8. save the exercise
  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//9. Test the API POST and GET using Insomnia

//10. add this new GET/DELETE/POST request
//11. Test the following API in Insomnia
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
