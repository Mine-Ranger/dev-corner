import WebDev from '../pages/WebDev';
import GameDev from '../pages/GameDev';
import {Navigate, Routes, Route} from "react-router-dom";

const Content = () => {
    return(
            <Routes>
                <Route path="/" element={<Navigate to="web" />}/>
                <Route path="web" element={<WebDev />}/>
                <Route path="game" element={<GameDev />}/>
            </Routes>
    )
}
export default Content;