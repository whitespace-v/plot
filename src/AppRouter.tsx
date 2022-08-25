import React from 'react';
import { Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NotYet from "./pages/NotYet";
import {ABOUT_ROUTE, DEMO_ROUTE, ERROR_NOT_YET_ROUTE} from "./hoc/utils/consts";
import Demo from "./pages/Demo";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path={ABOUT_ROUTE} element={<About/>} />
            <Route path={DEMO_ROUTE} element={<Demo/>} />
            <Route path={ERROR_NOT_YET_ROUTE} element={<NotYet/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;