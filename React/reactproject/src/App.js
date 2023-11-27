import './App.css';
import Addition from './components/Addition';
import Information from "./components/Information";
import Trainer from './components/Trainer';
import Payslip from './components/Payslip';
import Employees from './components/Employees';
import Test from './components/Test';

function App() {
  return (
    <>
      {/* <Information/>
      <br/><br/><br/><br/><br/><br/><br/>

      <Addition first="30" second="50" operation="add" /> <br/><br/>
      <Addition first="3560" second="600" operation="subtract"/> <br/><br/>
      <Addition first="12" second="12" operation="multiply"/> <br/><br/>
      <Addition first="121" second="11" operation="divide"/> <br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>

      <Trainer name1="Shafeeq" address1="Manny" />
      <Trainer name1="Tadas" address1="Glasgow" />
      <Trainer name1="Peter" address1="London" />
      <br/><br/><br/><br/><br/><br/><br/> */}

      <Payslip nameP="Anthony" departmentP="IT" addressP="Dundee" salaryP="2000" />
      <br/><br/><br/><br/><br/><br/>
      
      <h2> List of Employees working in the HR department </h2>
      <Employees department="HR"/>
      <br/><br/>
      <h2> List of Employees working in the IT department </h2>
      <Employees department="IT"/>
      <br/><br/>      <br/><br/>

      <Test />
    </>
  );
}

export default App;
