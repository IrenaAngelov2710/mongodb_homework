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
  duration: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: true
  }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

