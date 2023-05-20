module.exports = {
    getUser: (req, res) => {
        res.send("Returns a specific user's information");
    },
    getUsers: (req, res) => {
        res.send("Returns all the users information");
    },
    createUser: (req, res) => {
        res.send("Creates a user");
    },
    deleteUser: (req, res) => {
        res.send("Deletes a user by their id");
    },
    getUserLog: (req, res) => {
        res.send("Returns a users (by id) logs");
    }, 
    createUserLog: (req, res) => {
        res.send("Creates a new log for a user (by id)");
    }
}