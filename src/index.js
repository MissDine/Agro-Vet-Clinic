import React from "react"
import ReactDOM from "react-dom/client"
import { onCLS, onINP, onLCP, onFCP, onTTFB } from "web-vitals"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if (process.env.NODE_ENV === "development") {
  onCLS(console.log)
  onINP(console.log)
  onLCP(console.log)
  onFCP(console.log)
  onTTFB(console.log)
}
