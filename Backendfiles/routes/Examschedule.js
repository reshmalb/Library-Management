// const ExamTimetable = require('../models/ExamTimetable'); // Import the Mongoose model
import express from "express";
const router = express.Router();
import ExamTimetable  from '../models/Examtimetable.js'
// Controller function to create a new exam timetable

router.post("/addexamtimetable", async (req, res) => {
    try {
      const { examDate, startTime, endTime, examName, examid, subjectid, details } = req.body;
      const newExamTimetable = new ExamTimetable({ examDate, startTime, endTime, examName, examid, subjectid, details });
      const savedExamTimetable = await newExamTimetable.save();
      res.status(201).json(savedExamTimetable);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
// Controller function to get all exam timetables

router.get("/getexamtimetable", async (req, res) => {
    try {
      const examTimetables = await ExamTimetable.find();
      res.json(examTimetables);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Controller function to get an exam timetable by ID
// exports.getExamTimetableById = async (req, res) => {
//   try {
//     const examTimetable = await ExamTimetable.findById(req.params.id);
//     if (!examTimetable) {
//       return res.status(404).json({ message: 'Exam timetable not found' });
//     }
//     res.json(examTimetable);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to update an exam timetable by ID
// exports.updateExamTimetableById = async (req, res) => {
//   try {
//     const updatedExamTimetable = await ExamTimetable.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedExamTimetable) {
//       return res.status(404).json({ message: 'Exam timetable not found' });
//     }
//     res.json(updatedExamTimetable);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete an exam timetable by ID
// exports.deleteExamTimetableById = async (req, res) => {
//   try {
//     const deletedExamTimetable = await ExamTimetable.findByIdAndDelete(req.params.id);
//     if (!deletedExamTimetable) {
//       return res.status(404).json({ message: 'Exam timetable not found' });
//     }
//     res.json({ message: 'Exam timetable deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export default router;