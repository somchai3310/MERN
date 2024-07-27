const mongoose = require("mongoose");

const addToCardSchema = mongoose.Schema(
  {
    productId: String,
    quantify: Number,
    userId: String,

  },
  {
    timestamps: true,
  }
);

const addToCardModel = mongoose.model("addToCart", addToCardSchema);

module.exports = addToCardModel