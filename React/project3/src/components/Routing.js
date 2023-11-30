import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./HomePage.js"
import AboutUs from "./AboutUs.js"
import NotFound from "./NotFound.js"
import InputForm from "./InputForm.js"

function Routing() {
    return(
        <div className="App">

            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                
            </BrowserRouter> <br/><br/><br/>

            <InputForm /> <br/><br/><br/>

            <footer> 
                <h3> QA limited London </h3> 
            </footer>
        </div>
    )
}
export default Routing;