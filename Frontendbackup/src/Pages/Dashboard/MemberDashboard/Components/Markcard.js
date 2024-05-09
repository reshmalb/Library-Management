import { useState ,useContext } from "react";
import { AuthContext } from "../../../../Context/AuthContext";

const Markcard = () => {
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [points, setPoints] = useState("");
    const [assignedTo, setAssignedTo] = useState("All");
    const {user} = useContext(AuthContext);
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handlePointsChange = (e) => {
        setPoints(e.target.value);
    };

    const handleAssignedToChange = (e) => {
        setAssignedTo(e.target.value);
    };

    const handleAddAssignment = () => {
        // Implement logic to add the assignment
        // You can use the state variables (title, startDate, endDate, points, assignedTo) here
    };

    return (
        <>
        
             <table  className={user.userType==="Student"?"noneClass":"displayClass"}>
             <tr>
                 <td><input type="text" placeholder="Title" value={title} onChange={handleTitleChange} /></td>
                 <td>StartDate<input type="date" value={startDate} onChange={handleStartDateChange} /></td>
                 <td>EndDate<input type="date" value={endDate} onChange={handleEndDateChange} /></td>
                 <td>Points<input type="text" placeholder="Points" value={points} onChange={handlePointsChange} /></td>
                 <td>AssignedTo
                     <select value={assignedTo} onChange={handleAssignedToChange}>
                         <option value="All">All</option>
                         <option value="Batch1">Batch1</option>
                         <option value="Batch2">Batch2</option>
                     </select>
                 </td>
             </tr>
             <tr>
                 <td><input type="button" value="Add Assignment" onClick={handleAddAssignment} /></td>
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

export default Markcard;
