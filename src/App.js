import ReactDOM from "react-dom";
import { MemoryRouter, BrowserRouter, Routes, Route, hasHistory, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import SocialImpact from "./pages/SocialImpact";
import About from "./pages/About";
import Research from "./pages/Research";
import Google from "./pages/Experiences/Google";
import IBM from "./pages/Experiences/IBM";
import Dell from "./pages/Experiences/Dell";
import Hack from './pages/SocialImpact/Hack';
import Anabels from './pages/SocialImpact/Anabels';
import WICC from './pages/SocialImpact/WICC';
import Ableism from './pages/Research/Ableism';
import FactChecking from './pages/Research/FactChecking';
import NavBar from './components/NavBar/NavBar';
import NavBar2 from './components/NavBar/NavBar2';
import Footer from './components/Footer/Footer';
import '../src/pages/Page.css';
import { isMobile } from "react-device-detect";


export default function App() {
  return (
    <HashRouter basename="/" >
      {isMobile ? <></>:
      <NavBar/>
      // <NavBar2/>
      }
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/experience" index element={<Experience />} />
        <Route path="/social-impact" index element={<SocialImpact />} />
        <Route path="/research" index element={<Research />} />
        <Route path="/google" index element={<Google />} />
        <Route path="/ibm" index element={<IBM />} />
        <Route path="/dell" index element={<Dell />} />
        <Route path="/hack4impact" index element={<Hack />} />
        <Route path="/anabels" index element={<Anabels />} />
        <Route path="/wicc" index element={<WICC />} />
        {/* <Route path="/ableism-research" index element={<Ableism/>}/> */}
        {/* <Route path="/fact-checking-research" index element={<FactChecking/>}/> */}
      </Routes>
      {/* <Footer/> */}
    </HashRouter>
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

