const express = require("express")
const router = express.Router()
const lighthouseTest = require("../controllers/appLighthouse")

router.get("/makeAnalasys", lighthouseTest.makeAnalisys)

module.exports = router