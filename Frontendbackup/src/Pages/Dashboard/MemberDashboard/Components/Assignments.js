import { AuthContext } from "../../../../Context/AuthContext";
import { useState,useContext,useEffect } from "react";
import axios from "axios"
import "./Assignments.css"
const Assignment=()=>{
    const API_URL = process.env.REACT_APP_API_URL
    const { user } = useContext(AuthContext);
    const [title,setTitle]=useState(null);
    const [startedAt,setstartDate]=useState(null);
    const [expiredAt,setendDate]=useState(null);
    const [totalpoints,setPoint]=useState(null);
    const [questions,setQuestions]=useState(null);
    var  [recentAssignments,setRecentAddedAssignments]=useState([]);
    
    const addAssignment=async (e)=>{
        const AssinmentData =  {
            "createdBy": user._id,
            "startedAt": startedAt,
            "expiredAt": expiredAt,
            "totalpoints": totalpoints,
            "visible": true,
            "title": title,
            "questions": questions
          }
          try {
           const response=  await axios.post(API_URL + "api/assignments/addAssignments", AssinmentData);
           console.log(response)
            
            alert("Assignment Added Successfully 🎉")
        }
        catch (err) {
            console.log(err)
        }
          //pasted

    }
    useEffect(() => {
        const getAssignments = async () => {
            try {
                const response1 = await axios.get(API_URL + "api/assignments/getAllAssignments")
                console.log(response1.data);
                setRecentAddedAssignments(response1.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAssignments()
    }, [API_URL])
    return(
    <>
<div  className={user.userType==="Student"?"noneClass":"displayClass"}>
    
     <form className='addbook-form' onSubmit={addAssignment}>
    <table>
        <tr>
            <td><input type="text" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }}/></td>
            <td>StartDate<input type="date" onChange={(e) => { setstartDate(e.target.value) }}/></td>
            <td>EndDate<input type="date" onChange={(e) => { setendDate(e.target.value) }}/></td>
            <td>Points<input type="text" placeholder="Points" onChange={(e) => { setPoint(e.target.value) }}/></td>
        
                
        </tr>
        <tr><td colspan="4">Assignment Description<textarea onChange={(e) => { setQuestions(e.target.value) }}></textarea></td></tr>
        <tr>
            <td><input type="submit" value="Add Assignments"/></td>
        </tr>
    </table>
    </form>
    </div>
    <table className="activebooks-table">
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Points</th>
                            <th>StartDate</th>
                            <th>SubmissionDate</th>
                        </tr>
                        {
                            recentAssignments.map((item,key)=>{
                                return <tr>
                                <td>{key+1}</td>
                                <td>{item.title}</td>
                                <td>{item.totalpoints}</td>
                                <td>{item.startedAt}</td>
                                <td>{item.expiredAt}</td>
                                 </tr>   
                            })
                        }
            </table>
    </>
    );

}
export default Assignment;