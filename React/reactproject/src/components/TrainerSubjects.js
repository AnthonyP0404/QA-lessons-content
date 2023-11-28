import { useEffect, useState } from "react"

function TrainerSubjects() {

    let subjects = [
        {
            trainer: "shafeeq",
            subject: "html",
        },
        {
            trainer: "shafeeq",
            subject: "css",
        },
        {
            trainer: "andy",
            subject: "java",
        },
        {
            trainer: "andy",
            subject: "c#",
        }

    ];

    
    let [trainerName,setTrainerName] = useState("")
    let [subjectList,setSubjectList] = useState(subjects)

    useEffect( ()=> {
        setSubjectList(subjects.filter((rec)=> rec.trainer==trainerName))
    },[trainerName] )

    function filterTrainers() {
        setTrainerName(document.getElementById("trainerID").value)
    }

    let subCount=1

    return(
        <>
        
        <input id="trainerID"/>
        <input type="button" value="Search" onClick={ () => filterTrainers() }/> <br/><br/>
        
        <table>
            {
                subjects.map( (sub) => 
                    <tr>
                        <td>{subCount++}</td>
                        <td>{sub.subject}</td>
                    </tr>
                )
            }
        </table>

        </>
    )
}
export default TrainerSubjects