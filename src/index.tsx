import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Listings from './pages/Listings';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
