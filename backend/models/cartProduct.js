const mongoose = require("mongoose");

const addToCartSchema = mongoose.Schema(
  {
    productId: {
      ref: 'product',
      type: String,
    },
    quantify: Number,
    userId: String,

  },
  {
    timestamps: true,
  }
);

const addToCartModel = mongoose.model("addToCart", addToCartSchema);

module.exports = addToCartModel