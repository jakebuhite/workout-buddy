const express = require("express");
const app = express();
const port = 4000;
const { loadDB } = require("./utils/db")

const reportRoutes = require("./routes/reports")
const userRoutes = require("./routes/users")
const workoutRoutes = require("./routes/workouts")

// Routes
app.use("/reports", reportRoutes)
app.use("/users", userRoutes)
app.use("/workouts", workoutRoutes)
app.get("/", function (req, res) {
  res.send("This is the Workout Buddy API");
});

loadDB();

app.listen(port, function () {
  console.log(`Workout Buddy API listening on port ${port}!`);
});
