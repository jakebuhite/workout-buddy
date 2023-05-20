const User = require("../models/user")
const WorkoutLog = require("../models/log")

module.exports = {
    getUser: async (req, res) => {
        try {
            let id = req.params.id
            const user = await User.findById(id)
            if (user === null) {
                res.status(404).send("No user found")
            } else {
                res.status(200).json({ user })
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            // Removing passwords from output, as they are not needed when outputting all user data
            const userArr = users.map(({pass, keepAttrs}) => keepAttrs)
            res.status(200).json({ userArr })
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    createUser: async (req, res) => {
        try {
            let { username, email, pass } = req.body
            if (await User.find({ username: username }) != null) {
                res.status(409).send("Username already exists")
            } else {
                const user = await User.create({ username: username, email: email, role: 0, pass: pass, join_date: Date.now(), workout_log: [], streak: 0 })
                res.status(200).send("User successfully created")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    deleteUser: async (req, res) => {
        try {
            let id = req.params.id
            const user = await User.findByIdAndDelete(id)
            if (user === null) {
                res.status(404).send("User with provided id could not be found.")
            } else {
                res.status(200).send("User successfully deleted")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    updateUserAccount: async (req, res) => {
        try {
            let id = req.params.id
            let { previous, username, email, role } = req.body
            if (previous != username && await User.find({ username: username }) != null) {
                res.status(409).send("Username already exists")
            } else {
                const user = await User.findByIdAndUpdate(id, { username: username, email: email, role: role })
                if (user === null) {
                    res.status(404).send("User with provided id could not be found.")
                } else {
                    res.status(200).send("User successfully updated")
                }
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    updateUserStreak: async (req, res) => {
        // Increments user streak
        try {
            let id = req.params.id
            const user = await User.findByIdAndUpdate(id, { $inc: { streak: 1 } })
            if (user === null) {
                res.status(404).send("User with provided id could not be found.")
            } else {
                res.status(200).send("User streak successfully updated")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    getUserLog: async (req, res) => {
        try {
            let id = req.params.id
            const user = await User.findById(id)
            if (user === null) {
                res.status(404).send("No user found")
            } else {
                const workouts = user.workout_log
                res.status(200).json({ workouts })
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    }, 
    createUserLog: async (req, res) => {
        try {
            let id = req.params.id
            let { workout_date, minutes } = req.body
            const newWorkout = new WorkoutLog({ workout_date: workout_date, minutes: minutes })
            const user = await User.findByIdAndUpdate(id, { $push: { workout_log: newWorkout } })
            if (user === null) {
                res.status(404).send("User with provided id could not be found.")
            } else {
                res.status(200).send("User successfully updated")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    }
}