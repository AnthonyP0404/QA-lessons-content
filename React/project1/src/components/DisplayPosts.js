import { useState } from "react"


function DisplayPosts() {

    let [posts,addPosts] = useState([])

    let ref = fetch('http://jsonplaceholder.typicode.com/posts')
    ref.then(processResponse)
    
    function processResponse(response){
        let res = response.json()
        res.then(processRecords)
    }

    function processRecords(records){
        addPosts(records)
    }


    return(
        <>
        <h1>Displaying Posts</h1> <br/><br/>
        <table>
            <tr>
                <td> User ID </td>
                <td> ID </td>
                <td> Title </td>
                <td> Body </td>
            </tr>
        </table>
        {
            posts.map( (p) => (
                <tr>
                    <td> {p.userId} </td>
                    <td> {p.id} </td>
                    <td> {p.title} </td>
                    <td> {p.body} </td>
                </tr>
            ))
        }

        </>
    )
}
export default DisplayPosts