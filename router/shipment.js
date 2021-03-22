const express = require("express");
const shipmentcontroller = require('../controller/shipment')
const priner = require('../controller/printer')

const router = express.Router();
router.post("/", shipmentcontroller.create);
router.get("/", shipmentcontroller.getAllShipments);

module.exports = router;
