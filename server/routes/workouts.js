const express = require("express")
const router = express.Router()
const workoutsController = require("../controllers/workoutsController")

router.get("/", workoutsController.getWorkouts)

router.post("/create", workoutsController.createWorkout)

router.get("/:id", workoutsController.getWorkout)

router.post("/:id/delete", workoutsController.deleteWorkout)

router.post("/:id/update", workoutsController.updateWorkout)

module.exports = router