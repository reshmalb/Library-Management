//const Assignment = require('../models/Assignments.js'); // Import the Assignment model
import express from "express";
const router = express.Router();
import Assignment from "../models/Assignments.js";
// Controller function to create a new assignment
router.post('/addAssignments',async (req, res) => {
    try {
      const { createdBy,startedAt,expiredAt,status,totalpoints,visible,title, questions } = req.body; // Extract assignment details from request body
  
      // Create a new assignment instance
      const newAssignment = new Assignment({
          createdBy,startedAt,expiredAt,status,totalpoints,visible,title, questions
      });
  
      // Save the assignment to the database
      const savedAssignment = await newAssignment.save();
  
      // Send the saved assignment as a response
      res.status(201).json(savedAssignment);
    } catch (error) {
      // If an error occurs, send an error response
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get all assignments
router.get('/getAllAssignments',async (req, res) => {
    try {
      // Fetch all assignments from the database
      const assignments = await Assignment.find();
  
      // Send the assignments as a response
      res.json(assignments);
    } catch (error) {
      // If an error occurs, send an error response
      res.status(500).json({ message: error.message });
    }
  });
// Controller function to get an assignment by ID

const getAssignmentById = async (req, res) => {
  try {
    // Fetch the assignment with the specified ID from the database
    const assignment = await Assignment.findById(req.params.id);

    // If the assignment is not found, send a 404 error response
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    // Send the assignment as a response
    res.json(assignment);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update an assignment by ID
const updateAssignmentById = async (req, res) => {
  try {
    // Fetch the assignment with the specified ID from the database and update its details
    const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // If the assignment is not found, send a 404 error response
    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    // Send the updated assignment as a response
    res.json(updatedAssignment);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete an assignment by ID
const deleteAssignmentById = async (req, res) => {
  try {
    // Delete the assignment with the specified ID from the database
    const deletedAssignment = await Assignment.findByIdAndDelete(req.params.id);

    // If the assignment is not found, send a 404 error response
    if (!deletedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    // Send a success message as a response
    res.json({ message: 'Assignment deleted successfully' });
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: error.message });
  }
};
export default router;