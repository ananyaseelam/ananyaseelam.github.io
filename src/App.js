import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import SocialImpact from "./pages/SocialImpact";
import About from "./pages/About";
import Research from "./pages/Research";
import Google from "./pages/Experiences/Google";
import IBM from "./pages/Experiences/IBM";
import Dell from "./pages/Experiences/Dell";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/experience" index element={<Experience />} />
        <Route path="/social-impact" index element={<SocialImpact />} />
        <Route path="/research" index element={<Research />} />
        <Route path="/google" index element={<Google />} />
        <Route path="/ibm" index element={<IBM />} />
        <Route path="/dell" index element={<Dell />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

