import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late'],
    default: 'present'
  },
  remarks: {
    type: String,
    default: ''
  }
});

export default mongoose.model("Attendance", attendanceSchema);
