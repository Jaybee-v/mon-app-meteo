import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingleView from "./pages/SingleView"
import GlobalStyle from "./utils/style/GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/city">
                    <Route index element={<SingleView />} />
                    <Route path="?id=:id" element={<SingleView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
