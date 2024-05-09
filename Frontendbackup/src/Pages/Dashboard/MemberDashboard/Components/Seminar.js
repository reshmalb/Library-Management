import { useState,useContext } from "react";
import { AuthContext } from "../../../../Context/AuthContext";

const Seminar = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [points, setPoints] = useState("");
    const [assignedTo, setAssignedTo] = useState("All");
    const {user} =useContext(AuthContext);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handlePointsChange = (e) => {
        setPoints(e.target.value);
    };

    const handleAssignedToChange = (e) => {
        setAssignedTo(e.target.value);
    };

    const handleAddAssignment = () => {
        // Implement logic to add the assignment
        // You can use the state variables (title, date, points, assignedTo) here
    };

    return (
        <>
        
                 <table  className={user.userType==="Student"?"noneClass":"displayClass"}>
                 <tr>
                     <td><input type="text" placeholder="Title" value={title} onChange={handleTitleChange} /></td>
                     <td>Date<input type="date" value={date} onChange={handleDateChange} /></td>
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
                    <th>Date</th>
                    <th>Assigned To</th>
                </tr>
                {/* Render assignment data here */}
            </table>
        </>
    );
};

export default Seminar;
