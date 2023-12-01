import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react"

import ViewAllSellers     from "./ViewAllSellers";
import ViewSpecificSeller from "./ViewSpecificSeller";
import AddSeller          from './AddSeller';

// import '/../../App.css';

function SellersPage() {

    return(
        <div id="sellersPage">
        <h1>Sellers Page</h1>

        <BrowserRouter>
            {/* <select id="sellersFilter">
                <option> -- Select View -- </option>
                <option> <Link to={"./allSellers"}    > View all sellers     </Link> </option>
                <option> <Link to={"./specificSeller"}> View specific seller </Link> </option>
                <option> <Link to={"./addSeller"}     > Add seller           </Link> </option>
            </select> */}

            {/* <input type="button" value="View all sellers" onClick={<Link to={"./allSellers"}/>}  />     
            <input type="button" value="View specific seller" onClick={<Link to={"./specificSeller"}/>}/> 
            <input type="button" value="Add seller"         onClick={<Link to={"./addSeller"}/>}     />   */}

            <span><Link to={"./allSellers"}    > View all sellers     </Link> </span> 
            <span><Link to={"./specificSeller"}> View specific seller </Link> </span> 
            <span><Link to={"./addSeller"}     > Add seller           </Link> </span> <br/><br/>

            <Routes>
                <Route path="/"               element={<SellersPage/>} />
                <Route path="/allSellers"     element={<ViewAllSellers/>} />
                <Route path="/specificSeller" element={<ViewSpecificSeller/>} />
                <Route path="/addSeller"      element={<AddSeller/>} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default SellersPage