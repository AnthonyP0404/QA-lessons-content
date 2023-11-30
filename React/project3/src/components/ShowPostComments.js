import { useParams } from "react-router-dom"
import { useState } from "react"

function ShowPostComments() {
    let {pid} = useParams()

    let [comments,addComments] = useState([])

    let url = "http://jsonplaceholder.typicode.com/posts/" + pid + "/comments"
    fetch(url).then(processResponse)
    
    function processResponse(response){
        let res = response.json()
        res.then(processRecords)
    }

    function processRecords(records){
        addComments(records)
    }

    return(
        <> 
        
        <table style={{width:'40%', float:'left', margin:'1%'}}>
            <caption> <h2>Comments for post {pid}</h2>  </caption>
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
export default ShowPostComments