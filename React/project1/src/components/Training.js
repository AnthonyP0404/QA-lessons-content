import { useEffect, useState } from "react";

function Training() {
    let trainings = [
        {
            groupId: 21,
            location: "london",
            startDate: "",
            participants: 25,
            duration: 4
        }
    ]

    let [gID,setGID] = useState("")
    let [information,setInformation] = useState([])

    useEffect( ()=> {
        setInformation(trainings.filter((rec)=> rec.groupId==gID))
    },[gID] )

    function filterGID() {
        setGID(document.getElementById("selectID").value)
        document.getElementById("pID").value = "ID: " + gID
    }

    return(
        <> 
        <select id="selectID" style={{margin:'10px'}} onChange={filterGID}>
            <option>--- Select Group ID ---</option>
            <option>21</option>
        </select> <br/> <br/>

        <p id="pID" style={{margin:'10px'}}> ID: {document.getElementById("selectID").value} </p>

        <table style={{margin:'10px'}}>
            {
                information.map( (info) => 
                    <tr>
                        <td> {info.location} </td>
                        <td> {info.startDate} </td>
                        <td> {info.participants} </td>
                        <td> {info.duration} </td>
                    </tr>
                )
            } 
        </table>


        </> 
    )
}
export default Training