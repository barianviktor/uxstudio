const express = require("express");
const ImageController = require("../controllers/ImageController");
const router = express.Router();
router.post("/upload", ImageController.upload);

module.exports = router;
