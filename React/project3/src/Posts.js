import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowPostComments from "./components/ShowPostComments";

function Posts() {
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
        <div className="Posts">
            <BrowserRouter>
                <table style={{width:'55%', float:'left', margin:'1%'}}>
                    <caption> <h1> All Post Titles </h1> </caption>
                    {
                        posts.map( (P)=>
                            <tr>
                                <br/>
                                {
                                    <td> <Link to={`/comments/${P.id}`}> {P.title} </Link> </td>
                                }
                            </tr>
                        )
                    }
                </table>
                <br/><br/><br/>

                <Routes>
                    <Route path="/comments/:pid" element={<ShowPostComments />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Posts