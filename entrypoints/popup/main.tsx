import React from "react"
import ReactDOM, { Root } from "react-dom/client"
import App from "./App.tsx"
import "./App.css"
// import "./style.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
