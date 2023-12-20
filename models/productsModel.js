const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your product name"],
  },
  description: {
    type: String,
    required: [true, "please enter description"],
  },
  category: {
    type: String,
    required: [true, "please enter category"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
    required: [true, "please enter original price"],
  },
  discountPrice: {
    type: Number,
    // required:[true,"please enter discounted price"]
  },
  stock: {
    type: Number,
    // required:[true,"please enter discounted price"]
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      name: {
        type: Object,
      },
      comment: {
        type: String,
      },
      productID: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Products", productsSchema);
