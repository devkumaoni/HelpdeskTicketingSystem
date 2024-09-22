const mongoose = require("mongoose");

const engineerSchema = new mongoose.Schema(
  {
    
    firstName: {
      type: String,
      required: [true, "first Name Is Required"],
    },userId: {
      type: String,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "email  is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    
  },
  { timestamps: true }
);

const engineerModel = mongoose.model("engineer", engineerSchema);
module.exports = engineerModel;
