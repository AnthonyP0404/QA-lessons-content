import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./components/HomePage.js"
import AboutUs from "./components/AboutUs.js"
import NotFound from "./components/NotFound.js"
import InputForm from "./components/InputForm.js"
import Addition from './components/Addition.js';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav>
          <Link to="/"><h3>Home</h3></Link>
          <Link to="/aboutus"><h3>About Us</h3></Link>
          <Link to="/Addition/:T1/:T2"><h3>Addition</h3></Link>
        </nav>
        
        {/* <InputForm /> <br/><br/><br/> */}
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/Addition/:T1/:T2" element={<Addition/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
          
      </BrowserRouter> <br/><br/><br/>



      <footer> 
          <h3> QA limited London </h3> 
      </footer>
  </div>
  );
}

export default App;