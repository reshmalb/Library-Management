import { useState ,useContext,useEffect} from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import axios from "axios";

const Homeworks = () => {
    const [classname,setClassname] = useState("");
            const [subject, setSubject] = useState("");
            const [description,setDescription] =useState("");
            const [dueDate,setDueDate]=useState("");
            const [additionalDetails,setAdditionalDetails]=useState("");
            const [homeworkDetails,setHomeWorkDetails] = useState([]);
            const [homeworkData,setHomeWorkData]= useState();
            const API_URL = process.env.REACT_APP_API_URL;

            const {user} =useContext(AuthContext);

    const handleAddHomework = async () => {
        const homeworkData={
            classname, subject, description, dueDate, additionalDetails           
        };
       try {
          const response=  await axios.post(API_URL+"api/homework/addhomework", homeworkData);
          if(response.status === 201){
            setHomeWorkData(homeworkData);
          }
        
       } catch (error) {
        
       }
      
    };
    useEffect(()=>{
        const fetchHomeworkData= async()=>{
            try{

                 const response = await axios.get(API_URL+"api/homework/gethomework")
                  if(response?.data){
                        setHomeWorkDetails(response.data);
                  }

            }
            catch(error){
                console.log(error);
            }
        }
         fetchHomeworkData();
    },[homeworkData]);

    return (
        <>
           
   <table  className={user.userType==="Student"?"noneClass":"displayClass"}>
   <tr>
       <td>Classname<input type="text"  value={classname} onChange={(e)=>setClassname(e.target.value)} /></td>
       <td>Subject<input type="date" value={subject} onChange={(e)=>setSubject(e.target.value)} /></td>
       <td>Due Date<input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/></td>
       <td>Description<input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} /></td>
       <td>Additional Details<input type="text"  value={additionalDetails} onChange={(e)=>setAdditionalDetails(e.target.value)}/></td>

     
   </tr>
   <tr>
       <td><input type="button" value="Add Home Work" onClick={handleAddHomework} /></td>
   </tr>
</table>
           
        

            <table className="activebooks-table">
                <tr>
                    <th>S.No</th>
                    <th>Classname</th>
                    <th>Subject</th>
                    <th>Due Date</th>
                    <th>Description</th>
                    <th>Additional Details</th>
                </tr>
                {/* Render assignment data here */}
                {homeworkDetails?.map((data,index)=>(
                    <tr key={data._id}>
                        <td>{index+1}</td>
                        <td>{data.classname}</td>
                        <td>{data.subject}</td>
                        <td>{data.dueDate}</td>
                        <td>{data.description}</td>
                        <td>{data.additionalDetails}</td>
                       
                    </tr>
                ))}
            </table>
        </>
    );
};

export default Homeworks;
