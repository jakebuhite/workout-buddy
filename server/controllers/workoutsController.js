module.exports = {
    getWorkout: (req, res) => {
        res.send("Returns a specific workout");
    },
    getWorkouts: (req, res) => {
        res.send("Returns all the workouts");
    },
    createWorkout: (req, res) => {
        res.send("Creates a workout");
    },
    deleteWorkout: (req, res) => {
        res.send("Deletes a workout by their id");
    },
    updateWorkout: (req, res) => {
        res.send("Updates a workout by their id");
    }
}