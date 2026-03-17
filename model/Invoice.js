const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer"
    },

    items: [
      {
        name: String,
        quantity: Number,
        price: Number
      }
    ],

    total: Number,

    status: {
      type: String,
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);