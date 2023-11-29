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
        if (trainerName=="") setSubjectList(subjects)
        else setSubjectList(subjects.filter((rec)=> rec.trainer==trainerName))
    },[trainerName] )

    function filterTrainers() {
        setTrainerName(document.getElementById("trainerID").value)
    }

    let subCount=1

    return(
        <>
        
        <input id="trainerID" style={{margin:'5px'}}/>
        <input type="button" value="Search" style={{margin:'5px'}} onClick={ () => filterTrainers() }></input> <br/><br/>
            
        <div style={{margin:'5px'}}>
        Trainer: {trainerName} <br/>
        Subjects: <br/>
        </div>
        
        <table style={{margin:'5px', border:'solid 1px black'}}>
            {
                subjectList.map( (sub) => 
                    <tr>
                        <td> {subCount++} </td>
                        <td style={{width:'5px'}}> {sub.subject} </td>
                    </tr>
                )
            }
        </table>

        </>
    )
}
export default TrainerSubjects