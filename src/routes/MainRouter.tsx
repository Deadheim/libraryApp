import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import {FC} from "react";
import About from "../pages/about/About.tsx";

const MainRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About enabled={true}/>}/>
        </Routes>
    );
};

export default MainRouter;