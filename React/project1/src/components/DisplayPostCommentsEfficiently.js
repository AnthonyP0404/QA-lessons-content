import { useState } from "react"


function DisplayPostCommentsEfficiently() {

    let [comments,addComments] = useState([])

    function sendRequest() {
        let url = ""
        if (document.getElementById("textID").value == "") url = "https://jsonplaceholder.typicode.com/comments"
        else url = "http://jsonplaceholder.typicode.com/posts/" + document.getElementById("textID").value + "/comments"
        fetch(url).then(processResponse)
    }
    
    function processResponse(response){
        let res = response.json()
        res.then(processRecords)
    }

    function processRecords(records){
        addComments(records)
    }

    return(
        <>
        <h2>See comments for a specific post:</h2>
        <input type="text" id="textID" /> <input type="button" value="Go" onClick={sendRequest} /> <br/> <br/>
        
        <h3>Comments:</h3>
        <table>
        {
            comments.map( (c) => (
                <tr>
                    <td> {c.body} </td>
                </tr>
            ))
        }
        </table>

        </>
    )
}
export default DisplayPostCommentsEfficiently