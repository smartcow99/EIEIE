import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Libs/ScrollToTop";

export default function App() {
    return (
        <Router>
            <ScrollToTop />
        </Router>
    );
}
