import axios from "axios";
import React from "react";
import UserService from "../service/UserService";

class EmployeeComponent extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
      employees: [],
    };
  }

   
  componentDidMount() {
    UserService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
   /* axios.get('src/json/sample.json').then((res)=>{
        this.setState({employees : res})
    })*/
  }
  render() {
    const onDelete = (id) =>{
      UserService.deleteEmployee(id).then();
      window.location.reload();
  } 
    return (
      <div>
        <h1 className="text-center">Employees List</h1>
        <table className="table table-striped ">
            <thead>
                <tr>
                    <td>Employee Id</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Address</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody >
                {
                    this.state.employees.map(
                        employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.address}</td>
                            <td>{employee.email}</td>
                            <td> <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(employee.id)}}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeComponent;
