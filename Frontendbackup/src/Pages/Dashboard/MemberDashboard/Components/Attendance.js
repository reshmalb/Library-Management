import { AuthContext } from "../../../../Context/AuthContext";
import { useState,useContext,useEffect } from "react";
import axios from "axios"
import "./Attendance.css"

const Attendance=()=>{
    const [recentAddedMembers, setRecentAddedMembers] = useState([])
    const { user } = useContext(AuthContext);
    const API_URL = process.env.REACT_APP_API_URL
    const [markingdate,setMarkingdate]=useState();
    const [studentId,setStudentid]=useState();
    const  [atstatus,setAtstatus]=useState('present');
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = month + "/" + date + "/" + year;
    const addAttendance=async ()=>{
        const AttendanceData={
            "date": markingdate,
            "studentId": user._id,
            "status": atstatus,
            "remark": "Made up for the attended class"
          }
          try {
            await axios.post(API_URL + "api/attendance/addattendance", AttendanceData)
           
           alert("Attendance Added Successfully 🎉")
       }
       catch (err) {
           console.log(err)
       } 
    }

    useEffect(() => {
        const getMembers = async () => {
            try {
                const response = await axios.get(API_URL + "api/users/studentmembers")
                const recentMembers = await response.data.slice(0, 5)
                setRecentAddedMembers(recentMembers)
            }
            catch (err) {
                console.log(err)
            }
        }
        getMembers()
    }, [API_URL])

    return(
    <>
        <div className=" {user.userType==='Student'?'noneClass':'displayClass'}">
       
       
        <form className='addbook-form' onSubmit={addAttendance}>
        <div className="attendanceContainer">
            <h4>Mark Attendace</h4>
           <table>
            <tr><td>Select Student</td><td>
                <select onChange={(e) => { setStudentid(e.target.options[e.target.options.selectedIndex].value) }}>
                    <option>---Select---</option>
                 {
                    recentAddedMembers.map((member) => {
                        return  <option value={member._id}>{member.admissionId}-{member.userFullName}</option>
                            
                    }) 
                 }
                </select></td>
                
                <td>
                    <input type="date" onChange={(e) => { setMarkingdate(e.target.value) }} />
                </td>
                <td>
                    
                    <input type="submit" value="Mark Attendance"/>
                </td>
                </tr>
       </table>
       </div>
       </form>
     
    
       
       </div>
       <table>
        <th> Attendance of {currentDate} </th>

       </table>
    </>
    );

}
export default Attendance;