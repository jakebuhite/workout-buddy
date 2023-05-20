const express = require("express")
const router = express.Router()
const reportsController = require("../controllers/reportsController")

router.get("/", reportsController.getReports);

router.post("/create", reportsController.createReport);

router.get("/:id", reportsController.getReport);

router.post("/:id/delete", reportsController.deleteReport);

router.post("/:id/update", reportsController.updateReport);

module.exports = router;