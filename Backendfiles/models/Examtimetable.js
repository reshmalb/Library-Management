
import mongoose from "mongoose";

const examTimetableSchema = new mongoose.Schema({
  examDate: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  examName: {
    type: String,
    required: true
  },
  examid:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  subjectid:{
    type:String,
    required:true
  },
  details: {
    type: String,
    default: ''
  }
});
export default mongoose.model("Examtimetable", examTimetableSchema);

