const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    name: String,
    email: String,
    phone: String,
    address: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);