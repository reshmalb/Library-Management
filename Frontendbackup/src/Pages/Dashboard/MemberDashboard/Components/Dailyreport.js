import "./Dailyreport.css";
import  axios from 'axios'
 import React from "react";
 import { useState,useEffect,useContext } from "react";
// import { AuthContext } from "../../../Context/AuthContext";
import { AuthContext } from "../../../../Context/AuthContext";

const Dailyreport=()=>{
    const [dailyReport, setDailyReport]= useState([]);
    const API_URL = process.env.REACT_APP_API_URL;
    const { user } = useContext(AuthContext);
    const [memberDetails, setMemberDetails] = useState(null);
 
   useEffect(()=>{
    const fetchDailyReport=async()=>{
        try{
            const response =await axios.get(
                API_URL+"api/dailyreport/getdailyreport"
            );
            setMemberDetails(response.data);

        }catch(error){
            console.log(error);

        }
    };
    fetchDailyReport();
   })


   

    return(
    <>
       
  <div  className={user.userType==="Student"?"noneClass":"displayClass"}>


     <table className="activebooks-table">
     <tr>
         <th>S.No</th>
         <th>Date</th>
         <th>Student Name</th>
         <th>Task Completed</th>
         <th>Challege Faced</th>
         <th>Goals for Next Day</th>
     </tr>
{memberDetails?.map((item,index)=>(
  <tr key={item._id}>
  <th>{index+1}</th>
  <th>{item.date}</th>
  <th>Student Name</th>
  <th>{item.tasksCompleted}</th>
  <th>{item.challengesFaced}</th>
  <th>{item.goalsForNextDay}</th>
</tr>
))}       
</table>
</div>

 
    </>  
    
    );

}
export default Dailyreport;