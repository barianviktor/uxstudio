const express = require("express");
const ContactController = require("../controllers/ContactController");
const router = express.Router();
router.get("/", ContactController.getAllContact);
router.delete("/:id", ContactController.deleteContact);
router.post("/", ContactController.createContact);
router.put("/", ContactController.editContact);
module.exports = router;
