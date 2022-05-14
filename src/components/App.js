import reactDom from "react-dom";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import RecallPage from "./RecallPage";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App (){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/recall" element={<RecallPage />} />
            </Routes>
        </BrowserRouter>

    );
}