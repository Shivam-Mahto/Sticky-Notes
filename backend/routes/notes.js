const express = require("express");
const {
  getNotesController,
  createNotesController,
  updateNotesController,
  deleteNotesController,
} = require("../controllers/notesControllers");

const router = express.Router();

router.get("/", getNotesController);
router.post("/", createNotesController);
router.put("/", updateNotesController);
router.delete("/", deleteNotesController);

module.exports = router;
