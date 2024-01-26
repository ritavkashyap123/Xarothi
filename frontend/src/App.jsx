import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import SectionSecond from "./components/SectionSecond";
import Description from "./components/Description";
import SectionThree from "./components/SectionThree";
import Team from "./components/Team";
import About from "./components/About";

import "./index.css";
import Navbar from "./components/Navbar";
// import WebcamScreen from "./components/Webcam";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <SectionSecond />
              <Description />
              {/* <SectionThre  e /> */}
              <Team />
              <About />
            </>
          }
        />
        {/* <Route path="/posture" element={<WebcamScreen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
