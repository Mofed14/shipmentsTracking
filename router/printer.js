const express = require("express");
const printer = require('../controller/printer')

const router = express.Router();
router.get("/:id", printer.getByIdAndPrint);

module.exports = router;
