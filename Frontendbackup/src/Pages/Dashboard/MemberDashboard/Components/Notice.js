import {useState,useContext, useEffect } from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import axios from 'axios';


const Notice = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [details, setDetails] = useState("");
    const [school, setSchool] = useState("");
    const [noticedata,setnoticeData]=useState();
    const [noticeDetails,setNoticeDetails]=useState([]);
    const API_URL = process.env.REACT_APP_API_URL;
    

    const {user} =useContext(AuthContext);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSchoolChange = (e) => {
        setSchool(e.target.value);
    };

    
    const handleAddNotice = async() => {
        const noticeData ={
            title, details, date, school
        }
        try {
            const response = await axios.post(API_URL+"api/notice/createnotice",noticeData);
            if(response.status === 201){
                setnoticeData(noticeData);
            }
            
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        const fetchNoticeData= async()=>{
            try{

                 const response = await axios.get(API_URL+"api/notice/getnotice")
                  if(response?.data){
                        setNoticeDetails(response.data);
                  }

            }
            catch(error){
                console.log(error);
            }
        }
        fetchNoticeData();
    },[noticedata]);

    return (
        <>
            <table  className={user.userType==="Student"?"noneClass":"displayClass"}>
                <tr>
                    <td>Title<input type="text" placeholder="Title" value={title} onChange={handleTitleChange} /></td>
                    <td>Date<input type="date" value={date}  onChange={handleDateChange} /></td>
                    <td>Details<input type="text" value={details} onChange={handleDetailsChange} /></td>
                    <td>School<input type="text" placeholder="School" value={school} onChange={handleSchoolChange} /></td>
                  
                </tr>
                <tr>
                    <td><input type="button" value="Add Notice" onClick={handleAddNotice} /></td>
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
                {noticeDetails?.map((data,index)=>(
                    <tr key={data._id}>
                        <td>{index+1}</td>
                        <td>{data.title}</td>
                        <td>{data.date}</td>
                        <td>{data.details}</td>
                        <td>{data.school}</td>
                       
                    </tr>
                ))}
            </table>
        </>
    );
};

export default Notice;
