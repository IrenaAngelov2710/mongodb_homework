// Schemata da e naslov, opis, ocenka, vreme i avtor
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Blog', blogSchema);

