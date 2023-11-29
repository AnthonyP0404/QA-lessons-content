import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./HomePage.js"
import AboutUs from "./AboutUs.js"
import NotFound from "./NotFound.js"

function Routing() {
    return(
        <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    )
}
export default Routing;