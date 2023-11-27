
function Tax(sal) {
    let tax = 0
    if (sal >= 1000 && sal < 2000) tax = 0.15
    else if (sal >= 2000 && sal < 3000) tax = 0.21
    else if (sal >= 3000) tax = 0.30
    return tax
}

function Allowance(dept) {
    let allowance = 0
    switch (dept) {
        case "HR" : allowance = 0.01; break; 
        case "IT" : allowance = 0.025; break;
        case "Sales" : allowance = 0.015; break;
        default: allowance = 0; break;
    }
    return allowance
}

function Payslip(props) {

    return(
        <>
        <h2>Payslip - £</h2>
        Name: {props.nameP} <br/>
        Department: {props.departmentP} <br/>
        Address: {props.addressP} <br/>
        Salary: {props.salaryP} <br/>
        <br/>
        Tax calculated ({Tax(parseInt(props.salaryP))*100}%): {parseInt(props.salaryP) * Tax(parseInt(props.salaryP))} <br/>
        Allowance ({Allowance(props.departmentP)*100}%): {Allowance(props.departmentP) * parseInt(props.salaryP)} <br/>
        <br/>
        Total: {parseInt(props.salaryP) - Tax(parseInt(props.salaryP))*parseInt(props.salaryP) + Allowance(props.departmentP)*parseInt(props.salaryP)}
        </>
    )
}
export default Payslip;