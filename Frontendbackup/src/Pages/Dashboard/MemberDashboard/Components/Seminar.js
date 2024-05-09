import { useState,useContext, useEffect } from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import axios from "axios";

const Seminar = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location,setLocation]= useState("");
    const [speaker, setSpeaker] = useState("");
    const [description, setDescription] = useState("");
    const [additionalDetails,setAdditionalDetails]=useState("");
    const [seminarData,setSeminarData]= useState();
    const [seminarDetails,setSeminarDetails]=useState([]);
    const {user} =useContext(AuthContext);
    const API_URL = process.env.REACT_APP_API_URL;


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSpeakerChange = (e) => {
        setSpeaker(e.target.value);
    };
    const handleLocationChange=(e)=>{
        setLocation(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAdditionalDetailsChange =(e)=>{
        setAdditionalDetails(e.target.value);
    }

    const handleAddSeminar= () => {
       const seminarData={
        title,
        date,
        location,
        speaker,
        description,
        additionalDetails
       }
    
    try{
         const response= axios.post(API_URL+"api/seminar/createseminar",seminarData)
         
          if(response.status === 201){
            alert("seminar added succefully");
            setSeminarData(seminarData);

          }
    }catch(error){
        console.log(error);
    }
}
 useEffect(()=>{
    const fetchSeminarData =  async()=>{
         
    try{
        const response= await axios.get(API_URL+"api/seminar/getseminar")
         if(response.data){
            setSeminarDetails(response.data);
         }
   }catch(error){
       console.log(error);
   }

    };
    fetchSeminarData();
 },[seminarData]);
    return (
        <>
        
                 <table  className={user.userType==="Student"?"noneClass":"displayClass"}>
                 <tr>
                     <td>Title<input type="text" placeholder="Title" value={title} onChange={handleTitleChange} /></td>
                     <td>Date<input type="date" value={date} onChange={handleDateChange} /></td>
                     <td>Location<input type="text" placeholder="Location" value={location} onChange={handleLocationChange} /></td>
                     <td>Speaker<input type="text" placeholder="Speaker" value={speaker} onChange={handleSpeakerChange} /></td>
                     <td>Description<input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} /></td>
                     <td>Additional Details<input type="text" placeholder="Additional Details" value={additionalDetails} onChange={handleAdditionalDetailsChange} /></td>


                     
                 </tr>
                 <tr>
                     <td><input type="button" value="Add Seminar" onClick={handleAddSeminar} /></td>
                 </tr>
             </table>
    
       

            <table className="activebooks-table">
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Speaker</th>
                    <th>Description</th>
                    <th>Additional Details</th>

                </tr>
                {seminarDetails?.map((data,index)=>(
                    <tr key={data._id}>
                        <td>{index+1}</td>
                        <td>{data.title}</td>
                        <td>{data.date}</td>
                        <td>{data.location}</td>
                        <td>{data.speaker}</td>
                        <td>{data.description}</td>
                        <td>{data.additionalDetails}</td>
                    </tr>
                ))}


             </table>
        </>
    );
};

export default Seminar;
