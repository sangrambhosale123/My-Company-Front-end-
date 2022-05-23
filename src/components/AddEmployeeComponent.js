import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

const AddEmployeeComponent = () =>{
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [address , setaddress] = useState("");
    const [email , setEmail] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if(!firstName || !lastName || !address || !email){
            alert('Please fill all details');
        }
        else{
            let employee = {address,email,firstName,lastName};
            console.log (employee);
            UserService.addEmployee(employee).then();
         //   axios.post("http://localhost:10001/api/employee",employee).then();
            navigate("/");
        }
    }

    return <div className='container my-3'><form onSubmit={submit}>
    <h3 className='text-center'>Add  Employee</h3>
<div className="mb-3">
  <label htmlFor="title" className="form-label">First Name</label>
  <input type="text" className="form-control" value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="title" aria-describedby="emailHelp"/>
 
</div>
<div className="mb-3">
  <label htmlFor="desc" className="form-label">Last Name</label>
  <input type="text" className="form-control" onChange={(e)=>setLastName(e.target.value)} value={lastName} id="desc"/>
</div>

<div className="mb-3">
  <label htmlFor="desc" className="form-label">address</label>
  <input type="text" className="form-control" onChange={(e)=>setaddress(e.target.value)} value={address} id="desc"/>
</div>

<div className="mb-3">
  <label htmlFor="desc" className="form-label">Email</label>
  <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} id="desc"/>
</div>

<button type="submit" className="btn btn-sm btn-success">Add</button>
</form></div>
};

export default AddEmployeeComponent;