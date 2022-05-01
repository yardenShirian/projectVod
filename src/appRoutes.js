import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useEffect, useState } from 'react'
import VodApp from './comps/vodApp';
import axios, { Axios } from 'axios';
import PageNotFound404 from './comps/pageNotFound404';
import Info from './comps/info';



export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<PageNotFound404 />} />
                <Route index element={<VodApp />} />
                <Route path='/search/:s' element={<VodApp />} />
                <Route path='/year/:y' element={<VodApp />} />
                <Route path='/video/:id' element={<Info />} />
            </Routes>
        </BrowserRouter>
    )
}
