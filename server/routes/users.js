const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usersController")

router.get("/", usersController.getUsers)

router.post("/create", usersController.createUser)

router.post("/login", usersController.loginUser)

router.get("/:id", usersController.getUser)

router.post("/:id/updateStreak", usersController.updateUserStreak)

router.post("/:id/update", usersController.updateUserAccount)

router.post("/:id/delete", usersController.deleteUser)

router.get("/:id/logs", usersController.getUser)

router.post("/:id/logs/create", usersController.createUserLog)

module.exports = router