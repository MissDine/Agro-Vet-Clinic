import "../src/index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "../src/pages/Home"
import Services from "../src/pages/services"
import ContactUs from "../src/pages/ContactUs"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
