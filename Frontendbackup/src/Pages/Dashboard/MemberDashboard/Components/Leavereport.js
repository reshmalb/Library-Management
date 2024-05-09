import { useState,useContext} from "react";
import { AuthContext } from "../../../../Context/AuthContext";

const Leavereport=()=>{
  const {user} = useContext(AuthContext);
    var [leavedata,setleavedata]=useState(
        [
            {
              "enrollid": 1001,
              "studentname": "John Doe",
              "applieddate": "2024-04-26",
              "reason": "Family emergency",
              "status": "accepted"
            },
            {
              "enrollid": 1002,
              "studentname": "Alice Smith",
              "applieddate": "2024-04-25",
              "reason": "Medical appointment",
              "status": "rejected"
            },
            {
              "enrollid": 1003,
              "studentname": "Bob Johnson",
              "applieddate": "2024-04-24",
              "reason": "Attending a conference",
              "status": "accepted"
            },
            {
              "enrollid": 1004,
              "studentname": "Emma Brown",
              "applieddate": "2024-04-23",
              "reason": "Traveling",
              "status": "rejected"
            },
            {
              "enrollid": 1005,
              "studentname": "Michael Wilson",
              "applieddate": "2024-04-22",
              "reason": "Personal reasons",
              "status": "accepted"
            },
            {
              "enrollid": 1006,
              "studentname": "Emily Taylor",
              "applieddate": "2024-04-21",
              "reason": "Doctor's appointment",
              "status": "rejected"
            },
            {
              "enrollid": 1007,
              "studentname": "David Martinez",
              "applieddate": "2024-04-20",
              "reason": "Visiting family",
              "status": "accepted"
            },
            {
              "enrollid": 1008,
              "studentname": "Sophia Garcia",
              "applieddate": "2024-04-19",
              "reason": "Personal leave",
              "status": "rejected"
            },
            {
              "enrollid": 1009,
              "studentname": "Olivia Hernandez",
              "applieddate": "2024-04-18",
              "reason": "Vacation",
              "status": "accepted"
            },
            {
              "enrollid": 1010,
              "studentname": "Daniel Gonzales",
              "applieddate": "2024-04-17",
              "reason": "Family event",
              "status": "rejected"
            }
          ]
              
    );
    return(
    <>
     
    <div  className={user.userType==="Student"?"noneClass":"displayClass"}>

    <table className="activebooks-table">
                        <tr>
                            <th>SlNo</th>
                            <th>EnrollID</th>
                            <th>StudentName</th>
                            <th>Applied Date</th>
                            <th>Reason</th>
                            <th>Status</th>
                        </tr>
                        {
                           leavedata.map((item,key)=>{
                            return <tr>
                            <td>{key+1}</td>
                            <td>{item.enrollid}</td>
                            <td>{item.studentname}</td>
                            <td>{item.applieddate}</td>
                            <td>{item.reason}</td>
                            <td><input type="button" value={item.status==="accepted"?"sanctioned":"Approve"}/></td>
                        </tr>

                           }) 
                        }
                        
            </table>
    </div>

     
    </>
    );

}
export default Leavereport;