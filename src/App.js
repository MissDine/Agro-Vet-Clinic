import "../src/index.css"
import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Home = React.lazy(() => import("../src/pages/Home"))
const Services = React.lazy(() => import("../src/pages/services"))
const ContactUs = React.lazy(() => import("../src/pages/ContactUs"))

/**
 * Root application component.
 *
 * @description
 * Registers top-level client-side routes using React Router and renders
 * the corresponding page component for each route.
 *
 * @returns {JSX.Element} Router-wrapped app layout with route definitions.
 *
 * @note
 * This component uses BrowserRouter, so production hosting must be configured
 * to rewrite unknown paths to `index.html` for deep-link routes to work.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div className="min-h-screen bg-bg-main" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
