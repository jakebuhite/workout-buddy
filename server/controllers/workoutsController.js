const Workout = require("../models/workout")

module.exports = {
    getWorkout: async (req, res) => {
        try {
            let id = req.params.id
            const workout = await Workout.findById(id)
            if (workout === null) {
                res.status(404).send("No workout found")
            } else {
                res.status(200).json({ workout })
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    getWorkouts: async (req, res) => {
        try {
            const workouts = await Workout.find()
            res.status(200).json({ workouts })
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    createWorkout: async (req, res) => {
        try {
            let { workout_name, workout_difficulty, exercises } = req.body
            const workout = await Workout.create({ workout_name: workout_name, workout_difficulty: workout_difficulty, exercises: exercises })
            res.status(200).send("Workout successfully created")
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    deleteWorkout: async (req, res) => {
        try {
            let id = req.params.id
            const workout = await Workout.findByIdAndDelete(id)
            if (workout === null) {
                res.status(404).send("Workout with provided id could not be found.")
            } else {
                res.status(200).send("Workout successfully deleted")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    updateWorkout: async (req, res) => {
        try {
            let id = req.params.id
            let { workout_name, workout_difficulty, exercises } = req.body
            const workout = await Workout.findByIdAndUpdate(id, { workout_name: workout_name, workout_difficulty: workout_difficulty, exercises: exercises })
            if (workout === null) {
                res.status(404).send("Workout with provided id could not be found.")
            } else {
                res.status(200).send("Workout successfully updated")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    }
}