const express = require("express");
const router = express.Router();

router.use("/", require("./pages"));
router.use("/delete-btn", require("./delete-btn"));
router.use("/save", require("./save-btn"));
router.use("/edit_acc_db", require("./edit-btn"));

module.exports = router;
