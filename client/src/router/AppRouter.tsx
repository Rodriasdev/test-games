import { BrowserRouter,Route, Routes } from "react-router-dom";
import {Emotion} from '../page/Emotion'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"/>
                <Route path="/emotion" element={<Emotion/>}/>
            </Routes>
        </BrowserRouter>
    )
}