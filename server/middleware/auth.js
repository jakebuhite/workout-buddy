const User = require("../models/user")

const jwt = require("jsonwebtoken")
const path = require('path')
const envPath = path.join(__dirname, '..', '..', '/.env')
require('dotenv').config({path: envPath})

module.exports = {
    verifyToken: (req, res, next) => {
        const token = req.body.token || req.query.token || req.headers["x-access-token"]
        if (!token) {
            return res.status(403).send("A token is required for authentication")
        }
        
        try {
            const decoded = jwt.verify(token, process.env.TOKEN_KEY)
            req.user = decoded
        } catch (err) {
            return res.status(401).send("Invalid Token")
        }

        next()
    },
    isAdmin: async (req, res, next) => {
        const userId = req.user
        try {
            const user = await User.findById(userId)
            if (user === null) {
                return res.status(404).send("No user found")
            } else {
                const role = user.role
                if (role === 0) {
                    res.status(401).send("You are not authorized to view this page")
                }
            }
        } catch (err) {
            console.log(err)
            return res.status(400).send("There was an error processing your request. Please try again")
        }
        next()
    }
}