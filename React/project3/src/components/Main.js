import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ShowSubjects from "./ShowSubjects.js";


function Main() {

    let trainers=[
        {
            trainer:"shafeeq"
        },
        {
            trainer:"andy"
        },
        {
            trainer:"james"
        },
        {
            trainer:"peter"
        },
        {
            trainer:"boss"
        }
    ]
    
    return(
        <>
            <h1>QA Consulting</h1>
            <BrowserRouter>

                {
                    trainers.map( (T)=>
                        <>
                        <br/>
                        {
                            <Link to={`/subjects/${T.trainer}`}> {T.trainer} </Link>
                        }
                        </>
                    )
                }
                <br/><br/><br/>

                <Routes>
                    <Route path="/subjects/:tname" element={<ShowSubjects />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
export default Main