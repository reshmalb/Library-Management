//const Exam = require('../models/Exam'); // Import your Mongoose model
import express from "express";
const router = express.Router();
import Exam from "../models/Exams.js";
// Controller function to create a new exam

router.post("/addexam", async (req, res) => {
    try {
      const { examTitle, date, duration, totalMarks} = req.body;

      console.log(req.body);

      const newExam = new Exam({ examTitle, date, duration, totalMarks });

      const savedExam = await newExam.save();

      res.status(201).json(savedExam);
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get all exams
router.get("/getexam", async (req, res) => {
    try {
      const exams = await Exam.find();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

// Controller function to get an exam by ID
// exports.getExamById = async (req, res) => {
//   try {
//     const exam = await Exam.findById(req.params.id);
//     if (!exam) {
//       return res.status(404).json({ message: 'Exam not found' });
//     }
//     res.json(exam);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to update an exam by ID
// exports.updateExamById = async (req, res) => {
//   try {
//     const updatedExam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedExam) {
//       return res.status(404).json({ message: 'Exam not found' });
//     }
//     res.json(updatedExam);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete an exam by ID
// exports.deleteExamById = async (req, res) => {
//   try {
//     const deletedExam = await Exam.findByIdAndDelete(req.params.id);
//     if (!deletedExam) {
//       return res.status(404).json({ message: 'Exam not found' });
//     }
//     res.json({ message: 'Exam deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export default router;
