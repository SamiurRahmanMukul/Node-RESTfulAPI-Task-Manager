// external modules import
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must be provided name"],
      trim: true,
      maxlength: [20, "name must be less than 20 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    /* owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    }, */
  },
  {
    timestamps: true,
  }
);

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
