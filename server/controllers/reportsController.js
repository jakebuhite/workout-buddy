module.exports = {
    getReport: (req, res) => {
        res.send("Returns a specific report");
    },
    getReports: (req, res) => {
        res.send("Returns all the reports");
    },
    createReport: (req, res) => {
        res.send("Creates a report");
    },
    deleteReport: (req, res) => {
        res.send("Deletes a report by their id");
    },
    updateReport: (req, res) => {
        res.send("Updates a report by their id");
    }
}