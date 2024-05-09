// const LeaveReport = require('../models/LeaveReport'); // Import the Mongoose model
import express from "express";
const router = express.Router();
import LeaveReport from "../models/Leavereport.js";
// Controller function to create a new leave report
router.post("/applyleave",async (req, res) => {
    try {
      const { studentId, leaveType, startDate, endDate, reason, status, additionalDetails } = req.body;
      const newLeaveReport = new LeaveReport({ studentId, leaveType, startDate, endDate, reason, status, additionalDetails });
      const savedLeaveReport = await newLeaveReport.save();
      res.status(201).json(savedLeaveReport);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Controller function to get all leave reports

router.get("/getappliedleave",async (req, res) => {
    try {
      const leaveReports = await LeaveReport.find();
      res.json(leaveReports);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
// Controller function to get a leave report by ID
// exports.getLeaveReportById = async (req, res) => {
//   try {
//     const leaveReport = await LeaveReport.findById(req.params.id);
//     if (!leaveReport) {
//       return res.status(404).json({ message: 'Leave report not found' });
//     }
//     res.json(leaveReport);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to update a leave report by ID
// exports.updateLeaveReportById = async (req, res) => {
//   try {
//     const updatedLeaveReport = await LeaveReport.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedLeaveReport) {
//       return res.status(404).json({ message: 'Leave report not found' });
//     }
//     res.json(updatedLeaveReport);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete a leave report by ID
// exports.deleteLeaveReportById = async (req, res) => {
//   try {
//     const deletedLeaveReport = await LeaveReport.findByIdAndDelete(req.params.id);
//     if (!deletedLeaveReport) {
//       return res.status(404).json({ message: 'Leave report not found' });
//     }
//     res.json({ message: 'Leave report deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export default router;