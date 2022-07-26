import React from 'react';
import { Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NotYet from "./pages/NotYet";
import {ABOUT_ROUTE, ERROR_NOT_YET_ROUTE} from "./hoc/utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path={ABOUT_ROUTE} element={<About/>} />
            <Route path="*" element={<NotFound/>}/>
            <Route path={ERROR_NOT_YET_ROUTE} element={<NotYet/>}/>
        </Routes>
    );
};

export default AppRouter;