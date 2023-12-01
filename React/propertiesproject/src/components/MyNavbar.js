import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import SellersPage from "./seller/MainSellersPage";
import BuyersPage from "./BuyersPage";

function Navbar() {
    return (
      <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary ps-4">
          <a className="navbar-brand marker" href="#">
            <h3>QA</h3>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link p-2" href="http://localhost:3000/sellers">
                  <b>Sellers</b> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="#">
                  <b>Buyers</b>
                </a>
              </li>
            </ul>
          </div>
        </nav>


        <Routes>
            <Route path="/sellersPage" element={<SellersPage />} />
            <Route path="/buyers" element={<BuyersPage />} />
        </Routes>
      </BrowserRouter>
      </>
    )
}
export default Navbar