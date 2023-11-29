function Tax(sal) {
    let tax = 0
    if (sal >= 1000 && sal < 2000) tax = 0.15
    else if (sal >= 2000 && sal < 3000) tax = 0.21
    else if (sal >= 3000) tax = 0.30
    return tax
}

function Employees(props) {
    let employees = [
        {
            regno:145,
            name:"Shafeeq",
            salary:2300,
            dept:"HR"
        },
        {
            regno:14,
            name:"Ant",
            salary:1300,
            dept:"IT"
        }
    ]

    return(
        <> <table>
            <tr>
                <th> Empno </th>
                <th> Name </th>
                <th> Salary </th>
                <th> Tax </th>
                <th> Net Salary </th>
                <th> Department </th>
            </tr>
            {
                employees.filter((x)=> x.dept==props.department).map( (x) => 
                    (
                        <tr>
                            <td> {x.regno} </td>
                            <td> {x.name} </td>
                            <td> {x.salary} </td>
                            <td> {Tax(x.salary)*x.salary} </td>
                            <td> {x.salary - Tax(x.salary)*x.salary} </td>
                            <td> {x.dept} </td>
                        </tr>
                    )
                )
            }
        </table></>
    )
}
export default Employees