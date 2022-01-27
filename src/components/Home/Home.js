import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Countries from '../Countries/Countries';
import CountriesDetails from '../CountriesDetails/CountriesDetails';
import NoMatch from '../NoMatch/NoMatch';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Countries/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                    <Route path="countrie/:name" element={<CountriesDetails/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Home;