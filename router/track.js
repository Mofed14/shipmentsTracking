const express = require("express");
const trackcontroller = require('../controller/track')

const router = express.Router();
router.get("/", trackcontroller.ShowTheShipmentTrack);
router.post("/", trackcontroller.create);
router.put("/:id", trackcontroller.updateTrack);

module.exports = router;