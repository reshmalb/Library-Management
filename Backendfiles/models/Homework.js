import mongoose from "mongoose";
const homeworkSchema = new mongoose.Schema({
  classname: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  additionalDetails: {
    type: String,
    default: ''
  }
});
export default mongoose.model("Homework", homeworkSchema);

