// const MarkCard = require('../models/MarkCard'); // Import the Mongoose model
import express from "express";
const router = express.Router();
import MarkCard from "../models/Markcard.js";
// Controller function to create a new mark card

router.post("/addmarkcard", async (req, res) => {
    try {
      const { studentId, subject, marksObtained, maxMarks, examType, additionalDetails } = req.body;
      const newMarkCard = new MarkCard({ studentId, subject, marksObtained, maxMarks, examType, additionalDetails });
      const savedMarkCard = await newMarkCard.save();
      res.status(201).json(savedMarkCard);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get all mark cards
router.get("/getmarkcard",async (req, res) => {
    try {
      const markCards = await MarkCard.find();
      res.json(markCards);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
// Controller function to get a mark card by ID
// exports.getMarkCardById = async (req, res) => {
//   try {
//     const markCard = await MarkCard.findById(req.params.id);
//     if (!markCard) {
//       return res.status(404).json({ message: 'Mark card not found' });
//     }
//     res.json(markCard);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to update a mark card by ID
// exports.updateMarkCardById = async (req, res) => {
//   try {
//     const updatedMarkCard = await MarkCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedMarkCard) {
//       return res.status(404).json({ message: 'Mark card not found' });
//     }
//     res.json(updatedMarkCard);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete a mark card by ID
// exports.deleteMarkCardById = async (req, res) => {
//   try {
//     const deletedMarkCard = await MarkCard.findByIdAndDelete(req.params.id);
//     if (!deletedMarkCard) {
//       return res.status(404).json({ message: 'Mark card not found' });
//     }
//     res.json({ message: 'Mark card deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export default router;