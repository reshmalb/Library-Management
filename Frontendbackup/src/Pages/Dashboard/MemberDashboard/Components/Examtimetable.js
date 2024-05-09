import { useState,useContext } from "react";
import axios from 'axios'
import { AuthContext } from "../../../../Context/AuthContext";

const Examtimetable = () => {
    const [examTitle, setExamTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalMarks, setTotalMarks] = useState("");
    const [assignedTo, setAssignedTo] = useState("All");
    const {user} = useContext(AuthContext);

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleTotalMarksChange = (e) => {
        setTotalMarks(e.target.value);
    };

    const handleAssignedToChange = (e) => {
        setAssignedTo(e.target.value);
    };

    const handleAddAssignment = () => {
        // Implement logic to add the assignment
        // You can use the state variables (examTitle, startDate, endDate, totalMarks, assignedTo) here
    };

    return (
        <>
      
         <table   className={user.userType==="Student"?"noneClass":"displayClass"}>
         <tr>
             <td><input type="text" placeholder="Exam Title" value={examTitle} onChange={(e) => setExamTitle(e.target.value)} /></td>
             <td>StartDate<input type="date" value={startDate} onChange={handleStartDateChange} /></td>
             <td>EndDate<input type="date" value={endDate} onChange={handleEndDateChange} /></td>
             <td>TotalMarks<input type="text" placeholder="Points" value={totalMarks} onChange={handleTotalMarksChange} /></td>
             <td>AssignedTo
                 <select value={assignedTo} onChange={handleAssignedToChange}>
                     <option value="All">All</option>
                     <option value="Batch1">Batch1</option>
                     <option value="Batch2">Batch2</option>
                 </select>
             </td>
         </tr>
         <tr>
             <td><input type="button" value="AddAssignment" onClick={handleAddAssignment} /></td>
         </tr>
     </table>

      
       

            <table className="activebooks-table">
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Points</th>
                    <th>StartDate</th>
                    <th>SubmissionDate</th>
                </tr>
                {/* Render assignment data here */}
            </table>  
        </>
    );
};

export default Examtimetable;
