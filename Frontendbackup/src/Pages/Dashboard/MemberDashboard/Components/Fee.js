import { useEffect, useState,useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Context/AuthContext";

const Fees = () => {
    const [feeData,setFeeData]=useState();
    const [studentId, setStudentId] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentDate, setPaymentDate] = useState("");
    const [feeDetails,setFeeDetails]= useState([]);
    const API_URL = process.env.REACT_APP_API_URL;
    const {user}= useContext(AuthContext);

    const handleStudentIdChange = (e) => {
        setStudentId(e.target.value);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handlePaymentDateChange = (e) => {
        setPaymentDate(e.target.value);
    };

    const handleAddFee =async () => {
        const newFeeData={
            studentId: studentId,
            amount:amount,
            paymentDate:paymentDate,
            paymentMethod:paymentMethod
        }
    //         const { studentId, amount, paymentDate, paymentMethod }
     try{
          const response = await axios.post(API_URL +"api/fee/addfee",newFeeData);
           if(response.status == 201){
            setFeeData(newFeeData);
           } 

     }catch(error){
        console.log(error);
     }

    };

    useEffect(()=>{
        const fetchFeeData=async()=>{
            try{
                const response = await axios.get(API_URL +"api/fee/getfeedetails")
                 setFeeDetails(response.data);
           }catch(error){
              console.log(error);
           }
      
          };
          fetchFeeData();
        },[feeData])

    return (
        <>
            <table>
                <tr>
                    <td><input type="text" placeholder="Student ID" value={studentId} onChange={handleStudentIdChange} /></td>
                    <td><input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} /></td>
                    <td><input type="date" placeholder="Payment Date" value={paymentDate} onChange={handlePaymentDateChange} /></td>
                    <td><input type="text" placeholder="Payment Meythod" value={paymentMethod} onChange={handlePaymentMethodChange} /></td>

                </tr>
                <tr>
                    <td><input type="button" value="Add fee" onClick={handleAddFee} /></td>
                </tr>
            </table>
            <div  className={user.userType==="Student"?"noneClass":"displayClass"}>

            <table className="activebooks-table">
                <tr>
                    <th>S.No</th>
                    <th>StudentID</th>
                    <th>Amount</th>
                    <th>RemittanceDate</th>
                    <th>Payment Method</th>

                </tr>
                {feeDetails?.map((data,index)=>(
                    <tr key={data._id}>
                        <td> {index+1} </td>
                        <td>{data.studentId}</td>
                        <td>{data.amount}</td>
                        <td>{data.paymentDate}</td>
                        <td>{data.paymentMethod}</td>

                    </tr>
                ))}
                {/* Render fee data here */}
            </table>  
            </div>

        </>
    );
};

export default Fees;
