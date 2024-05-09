import mongoose from "mongoose";
const marksSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  marksObtained: {
    type: Number,
    required: true
  },
  maxMarks: {
    type: Number,
    required: true
  },
  examType: {
    type: String,
    required: true
  },
  additionalDetails: {
    type: String,
    default: ''
  }
});

export default mongoose.model("Markschema", marksSchema);
