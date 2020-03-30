const mongoose = require("mongoose");
const Scbema = mongoose.Schema;

// create Course Schema
const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true
  },
  coursePNG: {
    // TODO: add course schema
    type: Image
  }
});
