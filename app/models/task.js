import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
});

export default mongoose.model("Task", taskSchema);
