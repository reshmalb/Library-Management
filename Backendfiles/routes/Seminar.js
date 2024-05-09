// const Notice = require('../models/Notice'); // Import the Mongoose model
import express from "express";
const router = express.Router();
import Seminar from "../models/Seminar.js";

// Controller function to create a new notice




router.post("/createseminar", async (req, res) => {
    try {
      const { title,
        date,
        location,
        speaker,
        description,
        additionalDetails } = req.body;
      const newSeminar = new Seminar({ title,
        date,
        location,
        speaker,
        description,
        additionalDetails });
      const savedSeminar = await newSeminar.save();
      res.status(201).json(savedSeminar);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


// Controller function to get all notices

router.get("/getseminar", async (req, res) => {
    try {
      const seminar = await Seminar.find();
      res.json(seminar);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
// Controller function to get a notice by ID
// exports.getNoticeById = async (req, res) => {
//   try {
//     const notice = await Notice.findById(req.params.id);
//     if (!notice) {
//       return res.status(404).json({ message: 'Notice not found' });
//     }
//     res.json(notice);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to update a notice by ID
// exports.updateNoticeById = async (req, res) => {
//   try {
//     const updatedNotice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedNotice) {
//       return res.status(404).json({ message: 'Notice not found' });
//     }
//     res.json(updatedNotice);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete a notice by ID
// exports.deleteNoticeById = async (req, res) => {
//   try {
//     const deletedNotice = await Notice.findByIdAndDelete(req.params.id);
//     if (!deletedNotice) {
//       return res.status(404).json({ message: 'Notice not found' });
//     }
//     res.json({ message: 'Notice deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export default router;