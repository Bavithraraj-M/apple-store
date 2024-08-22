import "./App.scss";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Iphone from "./pages/Iphone";
import Ipad from "./pages/Ipad";
import Navbar from "./components/Navbar"
import Store from "./pages/Store";
import Mac from "./pages/Mac";
import AppleWatch from "./pages/Applewatch";
import Account from "./pages/Account";
import Bag from "./pages/Bag";


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
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>  
      </>
    );
}
export default App;
