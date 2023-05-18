const mongoose = require("mongoose");

const newTaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: [true, "Must Provide a name to the task"],
    trim: true,
    maxLength: [20, "name cannot be more than 20 characters"],
  },
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("newTask", newTaskSchema);
