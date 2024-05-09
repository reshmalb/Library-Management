import mongoose from "mongoose";
const seminarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  speaker: {
    type: String,
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

export default mongoose.model("Seminar", seminarSchema);
