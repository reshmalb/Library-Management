import { useEffect, useState,useContext } from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import axios from "axios";

const Exam = () => {
    const {user}=useContext(AuthContext);
    const [examTitle, setExamTitle] = useState("");
    const [date, setDate] = useState("");
    const [duration,setDuration] =useState();
    const [totalMarks, setTotalMarks] = useState("");
    const [assignedTo, setAssignedTo] = useState("All");
    const [examDetails,setExamDetails]=useState([]);
    const [examsData,setExamData]= useState();
    const API_URL = process.env.REACT_APP_API_URL;

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTotalMarksChange = (e) => {
        setTotalMarks(e.target.value);
    };

   

    const handleAddExam = async () => {

         const examData={
            examTitle:examTitle,
            date:date,
            duration:duration,
            totalMarks:totalMarks,


         }
        try{
            const response = await axios.post(API_URL +"api/exam/addexam",examData);
            console.log(response.data);
            if(response.status === 201){
                setExamData(examData);
            }


        }
        catch(error){
            console.log(error);

        }
    
    };
  useEffect(()=>{
    const fetchExamData = async()=>{
        try{
            const response = await axios.get(API_URL +"api/exam/getexam");
            setExamDetails(response?.data)
        }
        catch(error){
            console.log(error);
        }      

    }

    fetchExamData();
  },[examsData]);

    return (
        <>
          <table  className={user.userType==="Student"?"noneClass":"displayClass"}>
                <tr>
                    <td><input type="text" placeholder="Exam Title" value={examTitle} onChange={(e) => setExamTitle(e.target.value)} /></td>
                    <td>StartDate<input type="date" value={date} onChange={handleDateChange} /></td>
                    <td>Duration<input type="number" value={duration} onChange={handleDurationChange} /></td> 
                    <td>TotalMarks<input type="number" placeholder="Points" value={totalMarks} onChange={handleTotalMarksChange} /></td>
                   
                </tr>
                <tr>
                    <td><input type="button" value="Add Exam" onClick={handleAddExam} /></td>
                </tr>
            </table>

            <table className="activebooks-table">
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Total Marks</th>
                </tr>
                {/* Render exam data here */}
                {examDetails?.map((data,index)=>(
                    <tr key={data._id}>
                        <td>{index+1}</td>
                        <td>{data.examTitle}</td>
                        <td>{data.date}</td>
                        <td>{data.duration}</td>
                        <td>{data.totalMarks}</td>

                    </tr>
                ))}
            </table>
        </>
    );
};

export default Exam;
