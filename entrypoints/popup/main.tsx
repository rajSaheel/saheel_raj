import React from "react"
import ReactDOM, { Root } from "react-dom/client"
import App from "./App.tsx"
import "./style.css"
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
