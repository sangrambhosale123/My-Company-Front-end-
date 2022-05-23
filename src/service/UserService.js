import axios from "axios";


const EMPLOYEE_REST_API_URL = "http://localhost:10001/api/";

class UserService {

    getEmployees(){
    return axios.get(EMPLOYEE_REST_API_URL + 'employees');
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_REST_API_URL + 'employee/'+employeeId);
    }

    addEmployee (employee){
        return axios.post(EMPLOYEE_REST_API_URL + 'employee',employee);
    }
}

export default new UserService();