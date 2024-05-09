
import mongoose from "mongoose";
const dailyReportSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tasksCompleted: {
    type: String,
    required: true
  },
  challengesFaced: {
    type: String,
    default: ''
  },
  goalsForNextDay: {
    type: String,
    default: ''
  }
});
export default mongoose.model("dailyreport", dailyReportSchema);


