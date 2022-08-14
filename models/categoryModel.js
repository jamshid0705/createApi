const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: Number,
    required: [true, "Siz name kiritng !"],
  },
  created_at:{
    type:Date,
    default:Date.now()
  }
});
const Category = mongoose.model("categories", categorySchema);
module.exports = Category;
