
import express from "express"

const router = express.Router();

import moment  from "moment"

import Exams from '../models/Exams.js'
import Examtimetable from'../models/Examtimetable.js';
import Homework from '../models/Homework.js';
import Seminar from '../models/Seminar.js';
import Assignment from "../models/Assignments.js";
import Notice from '../models/Notice.js'
import { format } from "path";



router.get("/getcalenderdata", async (req, res) => {

    const currentDate =  moment().startOf('day');
    const datePart = currentDate.format('YYYY-MM-DD');
    console.log("currentdate",datePart)
    try {
       
        const AssignmentData = await Assignment.find({
            $expr: {
                $eq: [
                    { $dateToString: { format: "%Y-%m-%d", date: "$startedAt" } }, 
                    datePart 
                ]
            }
        });
        const ExamData= await Exams.find({
            $expr:{
                $eq:[
                    {$dateToString:{format:"%Y-%m-%d",date:"$date"}},
                    datePart
                ]
            }
        });

        const TimeTableData= await Exams.find({
            $expr:{
                $eq:[
                    {$dateToString:{format:"%Y-%m-%d",date:"$examDate"}},
                    datePart
                ]
            }
        });

   
        const HomeworkData= await Exams.find({
            $expr:{
                $eq:[
                    {$dateToString:{format:"%Y-%m-%d",date:"$dueDate"}},
                    datePart
                ]
            }
        });
        const SeminarData= await Exams.find({
            $expr:{
                $eq:[
                    {$dateToString:{format:"%Y-%m-%d",date:"$date"}},
                    datePart
                ]
            }
        });
        const NoticeData= await Exams.find({
            $expr:{
                $eq:[
                    {$dateToString:{format:"%Y-%m-%d",date:"$date"}},
                    datePart
                ]
            }
        });
      

        const combinedData = [
            ...ExamData.map(item => ({ id: item._id, title: item.title, start: item.date,end:item.date })),
            ...TimeTableData.map(item => ({ id: item._id, title: item.title, start: item.examDate,end:item.examDate })),
            ...HomeworkData.map(item => ({ id: item._id, title: item.title, start: item.dueDate,end:item.dueDate })),
            ...SeminarData.map(item => ({ id: item._id, title: item.title, start: item.date ,end:item.date})),
            ...NoticeData.map(item => ({ id: item._id, title: item.title, start: item.date,end:item.date })),
            ...AssignmentData.map(item => ({ id: item._id, title: item.title, start: item.startedAt,end:item.expiredAt}))
        ];

 console.log("combinedData",combinedData)
return res.status(200).json(combinedData);
} catch (error) {
console.error('Error retrieving calendar data:', error);
return res.status(500).json({ error: 'Internal Server Error' });
}

});

export default router;