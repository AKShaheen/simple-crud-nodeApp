const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide A name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide a quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;