import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import MyNavbar from './components/MyNavbar'
import SellersPage from './components/seller/MainSellersPage'
import ViewAllSellers     from "./components/seller/ViewAllSellers";
import ViewSpecificSeller from "./components/seller/ViewSpecificSeller";
import AddSeller          from './components/seller/AddSeller';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar />
      </header>

      <body>

        <BrowserRouter>
          <Routes>
            <Route path="/sellersHome"         element={<SellersPage/>} />
            <Route path="/allSellers"     element={<ViewAllSellers/>} />
            <Route path="/specificSeller" element={<ViewSpecificSeller/>} />
            <Route path="/addSeller"      element={<AddSeller/>} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
