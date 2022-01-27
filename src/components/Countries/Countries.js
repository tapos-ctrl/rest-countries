import React, { useEffect, useState } from 'react';
import Countrie from '../Countrie/Countrie';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const url = ('https://restcountries.com/v3.1/all');
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div className="all-countries-box">
            {
                countries.map(countrie => <Countrie countries={countrie}></Countrie>)
            }
        </div>
    );
};

export default Countries;