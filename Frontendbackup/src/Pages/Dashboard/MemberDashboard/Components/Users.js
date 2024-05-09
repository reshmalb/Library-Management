import React, { useEffect, useState } from 'react'
import axios from "axios"
const Users=()=>{
   
    const [recentAddedMembers, setRecentAddedMembers] = useState([])
    const API_URL = process.env.REACT_APP_API_URL
     //Fetch Members
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
            <table className="activebooks-table">
                        <tr>
                            <th>S.No</th>
                            <th>Enroll ID</th>
                            <th>Student Name</th>
                            <th>Email</th>
                        </tr>
                        {
                    recentAddedMembers.map((member, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{member.admissionId}</td>
                                <td>{member.userFullName}</td>
                                <td>{member.email}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Users;