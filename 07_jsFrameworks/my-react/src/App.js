import './assets/css/app.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import PageHome from "./pages/Home";
import PageAbout from "./pages/About";
import PageContact from "./pages/Contact";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import PageError404 from "./pages/Error404";
import PagePortfolios from "./pages/Portfolios";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="about" element={<PageAbout />} />
                    <Route path="contact" element={<PageContact />} />
                    <Route path="portfolios" element={<PagePortfolios />} />
                    <Route path="*" element={<PageError404 />} />
                </Routes>
            <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
