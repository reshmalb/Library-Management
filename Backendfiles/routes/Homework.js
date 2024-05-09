//const Homework = require('../models/Homework'); // Import the Mongoose model
import express from "express";
const router = express.Router();
import Homework from "../models/Homework.js";
// Controller function to create a new homework

router.post("/addhomework", async (req, res) => {
    try {
      const { classname, subject, description, dueDate, additionalDetails } = req.body;
      const newHomework = new Homework({ classname, subject, description, dueDate, additionalDetails });
      const savedHomework = await newHomework.save();
      res.status(201).json(savedHomework);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get all homework
 
router.get("/gethomework",async (req, res) => {
    try {
      const homework = await Homework.find();
      res.json(homework);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get a homework by ID
// exports.getHomeworkById = async (req, res) => {
//   try {
//     const homework = await Homework.findById(req.params.id);
//     if (!homework) {
//       return res.status(404).json({ message: 'Homework not found' });
//     }
//     res.json(homework);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to update a homework by ID
// exports.updateHomeworkById = async (req, res) => {
//   try {
//     const updatedHomework = await Homework.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedHomework) {
//       return res.status(404).json({ message: 'Homework not found' });
//     }
//     res.json(updatedHomework);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete a homework by ID
// exports.deleteHomeworkById = async (req, res) => {
//   try {
//     const deletedHomework = await Homework.findByIdAndDelete(req.params.id);
//     if (!deletedHomework) {
//       return res.status(404).json({ message: 'Homework not found' });
//     }
//     res.json({ message: 'Homework deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export default router;