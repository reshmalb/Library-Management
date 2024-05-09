// const Fees = require('../models/Fees'); // Import the Mongoose model
import express from "express";
const router = express.Router();
import Fees from "../models/Fee.js";
// Controller function to create a new fee record

router.post("/addfee",async (req, res) => {
    try {
      const { studentId, amount, paymentDate, paymentMethod } = req.body;
      const newFee = new Fees({ studentId, amount, paymentDate, paymentMethod });
      const savedFee = await newFee.save();
      res.status(201).json(savedFee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get all fee records

router.get("/getfeedetails", async (req, res) => {
    try {
      const fees = await Fees.find();
      res.json(fees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Controller function to get a fee record by ID
// exports.getFeeById = async (req, res) => {
//   try {
//     const fee = await Fees.findById(req.params.id);
//     if (!fee) {
//       return res.status(404).json({ message: 'Fee record not found' });
//     }
//     res.json(fee);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to update a fee record by ID
// exports.updateFeeById = async (req, res) => {
//   try {
//     const updatedFee = await Fees.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedFee) {
//       return res.status(404).json({ message: 'Fee record not found' });
//     }
//     res.json(updatedFee);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete a fee record by ID
// exports.deleteFeeById = async (req, res) => {
//   try {
//     const deletedFee = await Fees.findByIdAndDelete(req.params.id);
//     if (!deletedFee) {
//       return res.status(404).json({ message: 'Fee record not found' });
//     }
//     res.json({ message: 'Fee record deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export default router;