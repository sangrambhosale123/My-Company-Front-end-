
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddEmployeeComponent from './components/AddEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route exact path="/" element={<EmployeeComponent/>}/>
      <Route exact path="/addEmployee" element={<AddEmployeeComponent/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
