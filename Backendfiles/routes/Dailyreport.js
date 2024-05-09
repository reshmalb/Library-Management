//const Dailyreport = require('../models/Dailyreport'); // Import your Mongoose model
import express from "express";
const router = express.Router();
import Dailyreport from "../models/Dailyreport.js";
// Controller function to create a new record
router.post("/adddailyreport",async (req, res) => {
    try {
      const { date, studentId, tasksCompleted, challengesFaced, goalsForNextDay } = req.body;
      const newRecord = new Dailyreport({ date, studentId, tasksCompleted, challengesFaced, goalsForNextDay });
      const savedRecord = await newRecord.save();
      res.status(201).json(savedRecord);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Controller function to get all records
router.get("/getdailyreport",async (req, res) => {
    try {
      const records = await Dailyreport.find();
      res.json(records);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
// Controller function to get a record by ID
// exports.getRecordById = async (req, res) => {
//   try {
//     const record = await Dailyreport.findById(req.params.id);
//     if (!record) {
//       return res.status(404).json({ message: 'Record not found' });
//     }
//     res.json(record);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// Controller function to update a record by ID
// exports.updateRecordById = async (req, res) => {
//   try {
//     const updatedRecord = await Dailyreport.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedRecord) {
//       return res.status(404).json({ message: 'Record not found' });
//     }
//     res.json(updatedRecord);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete a record by ID
// exports.deleteRecordById = async (req, res) => {
//   try {
//     const deletedRecord = await Dailyreport.findByIdAndDelete(req.params.id);
//     if (!deletedRecord) {
//       return res.status(404).json({ message: 'Record not found' });
//     }
//     res.json({ message: 'Record deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export default router;