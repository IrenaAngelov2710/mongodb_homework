// Schemata da e naslov, opis, ocenka, vreme i avtor
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You muss enter a title"],
  },
  description: {
    type: String,
    required: [true]
  },
  rating: {
    type: Number,
    default: 4,
  },
  duration: {
    type: Date,
    default: Date.now,
},
  author: {
    type: String,
    required: [true, "You must enter the author"]
  }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

