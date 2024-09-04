import { BrowserRouter,Route, Routes } from "react-router-dom";
import {Emotion} from '../page/Emotion'
import { Home } from "../page/Home";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/emotion" element={<Emotion/>}/>
            </Routes>
        </BrowserRouter>
    )
}