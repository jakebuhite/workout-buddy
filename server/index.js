const express = require("express")
const app = express()
const port = 4000
const { loadDB } = require("./utils/db")
const bodyParser = require('body-parser')

const reportRoutes = require("./routes/reports")
const userRoutes = require("./routes/users")
const workoutRoutes = require("./routes/workouts")
const exerciseRoutes = require("./routes/exercises")

// For parsing application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get("/", function (req, res) { res.send("This is the Workout Buddy API") })
app.use("/reports", reportRoutes)
app.use("/users", userRoutes)
app.use("/workouts", workoutRoutes)
app.use("/exercises", exerciseRoutes)

// Load MongoDB
loadDB()

app.listen(port, function () {
  console.log(`Workout Buddy API listening on port ${port}!`)
})
