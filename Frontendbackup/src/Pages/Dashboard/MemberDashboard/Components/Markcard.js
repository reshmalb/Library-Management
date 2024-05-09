import { useState ,useContext,useEffect } from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import axios from "axios";

const Markcard = () => {
  
    const {user} = useContext(AuthContext);
    const [studentId,setStudentId]=useState("");
    const [subject,setSubject]=useState("");
    const [markObtained,setmarkObtained]=useState();
    const [maxMarks,setMaxMarks] =useState();
    const [examType,setExamType]=useState("");
    const [additionalDetails,setAdditionalDetails]=useState("");
    const [markData,setMarkData]=useState();
    const [markDetails,setMarkDetails]= useState([]);

    const API_URL = process.env.REACT_APP_API_URL;

   

    const handleMarksCard = async () => {
        // Implement logic to add the assignment
        // You can use the state variables (title, startDate, endDate, points, assignedTo) here
        const markData={
            studentId, subject, markObtained, maxMarks, examType, additionalDetails
        }    
        try {
            const response = await axios.post(API_URL+"api/markcard/addmarkcard",markData);
            if(response.status === 201){
                setMarkData(markData);
            }
            
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        const fetchNoticeData= async()=>{
            try{

                 const response = await axios.get(API_URL+"api/notice/getmarkcard")
                  if(response?.data){
                        setMarkDetails(response.data);
                  }

            }
            catch(error){
                console.log(error);
            }
        }
        fetchNoticeData();
    },[markData]);

    return (
        <>
        
             <table  className={user.userType==="Student"?"noneClass":"displayClass"}>
             <tr>
                 <td>StudentId<input type="text" placeholder="StudentId" value={studentId} onChange={(e)=>setStudentId(e.target.value)} /></td>
                 <td>Subject<input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} /></td>
                 <td>Mark Obtained<input type="text" value={markObtained} onChange={(e)=>setmarkObtained(e.target.value)} /></td>
                 <td>Maximum Marks<input type="text"  value={maxMarks} onChange={(e)=>setMaxMarks(e.target.value)} /></td>
                 <td>Exam Type<input type="text"  value={examType} onChange={(e)=>setExamType(e.target.value)} /></td>
                 <td>Additional Details<input type="text"  value={additionalDetails} onChange={(e)=>setAdditionalDetails(e.target.value)} /></td>

              
             </tr>
             <tr>
                 <td><input type="button" value="Add Marks Card" onClick={handleMarksCard} /></td>
             </tr>
         </table>
 
            <table className="activebooks-table">
            <tr>
                <th>Student ID</th>
                <th>Subject</th>
                <th>Mark Obtained</th>
                <th>Max Marks</th>
                <th>Exam Type</th>
                <th>Additional Details</th>
            </tr>
                            {/* Render assignment data here */}
            {markDetails?.map((data,index)=>(
                    <tr key={data._id}>
                        <td>{index+1}</td>
                        <td>{data.studentId}</td>
                        <td>{data.subject}</td>
                        <td>{data.markObtained}</td>
                        <td>{data.maxMarks}</td>
                        <td>{data.examType}</td>

                        <td>{data.additionalDetails}</td>

                       
                    </tr>
                ))}
            </table>
        </>
    );
};

export default Markcard;  
