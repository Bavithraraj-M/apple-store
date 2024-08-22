import "./App.scss";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Support from "./pages/Support"
import Iphone from "./pages/Iphone";
import Ipad from "./pages/Ipad";
import Navbar from "./components/Navbar"
import Store from "./pages/Store";
import Mac from "./pages/Mac";
import AppleWatch from "./pages/Applewatch";
import Account from "./pages/Account";
import Bag from "./pages/Bag";
import Footer from "./components/Footer";
import { ClassNames } from "@emotion/react";


function App() {

    return(
      <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/iPhone" element={<Iphone />} />
            <Route path="/iPad" element={<Ipad />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/watch" element={<AppleWatch />} />
            <Route path="/support" element={<Support />} />
            <Route path="/account" element={<Account />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>
          <Footer />  
      </>
    );
}
export default App;
