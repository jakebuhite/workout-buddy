const express = require("express")
const router = express.Router()
const exercisesController = require("../controllers/exercisesController")

router.get("/", exercisesController.getExercises)

router.post("/create", exercisesController.createExercise)

router.get("/:id", exercisesController.getExercise)

router.post("/:id/delete", exercisesController.deleteExercise)

router.post("/:id/update", exercisesController.updateExercise)

module.exports = router