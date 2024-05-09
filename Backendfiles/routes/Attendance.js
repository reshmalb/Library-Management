//const Attendance = require('../models/attendance');
import express from "express";
const router = express.Router();
import Attendance from "../models/Attendance.js";
// Controller function to create new attendance record

router.post("/addattendance",async (req, res) => {
    try {
      const { date, studentId, status, remark } = req.body;
      const newAttendance = new Attendance({ date, studentId, status, remark });
      const savedAttendance = await newAttendance.save();
      res.status(201).json(savedAttendance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get all attendance records

router.get('/getattandance',async (req, res) => {
    try {
      const attendance = await Attendance.find();
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get attendance record by ID

router.get('/getattandancebyid/:id',async (req, res) => {
    try {
      const attendance = await Attendance.findById(req.params.id);
      if (!attendance) {
        return res.status(404).json({ message: 'Attendance record not found' });
      }
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to update attendance record by ID
export default router;