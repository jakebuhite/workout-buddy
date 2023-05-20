const Exercise = require("../models/exercise")

module.exports = {
    getExercises: async (req, res) => {
        try {
            const exercises = await Exercise.find()
            res.status(200).json({ exercises })
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    createExercise: async (req, res) => {
        try {
            let { exercise_name, exercise_image, exercise_description, body_parts } = req.body
            const exercise = await Exercise.create({ exercise_name: exercise_name, exercise_image: exercise_image, exercise_description: exercise_description, body_parts: body_parts })
            res.status(200).send("Exercise successfully created")
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    getExercise: async (req, res) => {
        try {
            let id = req.params.id
            const exercise = await Exercise.findById(id)
            if (exercise === null) {
                res.status(404).send("No exercise found")
            } else {
                res.status(200).json({ exercise })
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    deleteExercise: async (req, res) => {
        try {
            let id = req.params.id
            const exercise = await Exercise.findByIdAndDelete(id)
            if (exercise === null) {
                res.status(404).send("Exercise with provided id could not be found.")
            } else {
                res.status(200).send("Exercise successfully deleted")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    updateExercise: async (req, res) => {
        try {
            let id = req.params.id
            let { exercise_name, exercise_image, exercise_description, body_parts } = req.body
            const exercise = await Exercise.findByIdAndUpdate(id, { exercise_name: exercise_name, exercise_image: exercise_image, exercise_description: exercise_description, body_parts: body_parts })
            if (exercise === null) {
                res.status(404).send("Exercise with provided id could not be found.")
            } else {
                res.status(200).send("Exercise successfully updated")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    }
}