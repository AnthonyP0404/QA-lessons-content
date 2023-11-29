import { useState } from "react"


function DisplayPostComments() {

    let [comments,addComments] = useState([])

    let ref = fetch('http://jsonplaceholder.typicode.com/comments')
    
    
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
        <input type="text" id="textID" /> <input type="button" value="Go" onClick={() => (ref.then(processResponse))} /> <br/> <br/>
        
        <h3>Comments:</h3>
        <table>
        {
            comments.filter( (p) => (p.postId == document.getElementById("textID").value) ).map( (c) => (
                <tr>
                    <td> {c.body} </td>
                </tr>
            ))
        }
        </table>

        </>
    )
}
export default DisplayPostComments