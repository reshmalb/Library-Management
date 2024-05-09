
import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  examTitle: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // Duration in minutes
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  }
  
});
export default mongoose.model("Exam", examSchema);


