const app = require("express").Router();
const Workout = require("../models/workout.js");


//Post route to create a new workout
app.post("/api/workouts",({body}, res)=>{
    console.log("Adding a New Workout")
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//get fr out last workout
app.get("/api/workouts", (req,res)=>{
    console.log("Getting Workout")
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//Add an exercise by ID
app.put("/api/workouts/:id", (req, res) => {
    console.log("Adding an exercise")
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: {exercises: req.body}},
      { new: true}
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // Gets workouts and oputs then into graphs and charts
  app.get("/api/workouts/range", (req, res)=>{
      Workout.find({})
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
  });

  module.exports = app;