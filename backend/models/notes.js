const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  colors: Object({
    colorHeader: {
      type: String,
      required: true,
    },
    colorBody: {
      type: String,
      required: true,
    },
  }),
  position: Object({
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  }),
});

const Notes = mongoose.model("Notes", notesSchema);
module.exports = Notes;
