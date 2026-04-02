import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/embla.css";
import "../src/index.css";
import ContactUs from "../src/pages/ContactUs";
import Home from "../src/pages/Home";
import Services from "../src/pages/services";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
