const express = require("express");
const router = express.Router();
const loggerController = require("../controllers/loggerController");

router.get("", loggerController.showAll);
router.post("", loggerController.addLogger);
router.delete("/:id", loggerController.deleteLogger);
router.put("/:id", loggerController.editLogger);
module.exports = router;
