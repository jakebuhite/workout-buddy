const Report = require("../models/report")

module.exports = {
    getReport: async (req, res) => {
        try {
            let id = req.params.id
            const report = await Report.findById(id)
            if (report === null) {
                res.status(404).send("No record found")
            } else {
                res.status(200).json({ report })
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    getReports: async (req, res) => {
        try {
            const reports = await Report.find()
            res.status(200).json({ reports })
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    createReport: async (req, res) => {
        try {
            let { message } = req.body
            const report = await Report.create({ report_date: Date.now(), message: message, status: 'OPEN' })
            res.status(200).send("Report successfully created")
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    deleteReport: async (req, res) => {
        try {
            let id = req.params.id
            const report = await Report.findByIdAndDelete(id)
            if (report === null) {
                res.status(404).send("Report with provided id could not be found.")
            } else {
                res.status(200).send("Report successfully deleted")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    },
    updateReport: async (req, res) => {
        try {
            let id = req.params.id
            let { message, status } = req.body
            const report = await Report.findByIdAndUpdate(id, { message: message, status: status })
            if (report === null) {
                res.status(404).send("Report with provided id could not be found.")
            } else {
                res.status(200).send("Report successfully updated")
            }
        } catch (err) {
            res.status(400).send("There was an error processing your request. Please try again")
            console.log(err)
        }
    }
}