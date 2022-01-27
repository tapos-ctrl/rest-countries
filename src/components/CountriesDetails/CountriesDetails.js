import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Detail/Detail';
import './CountriesDetails.css'

const CountriesDetails = () => {
    const [countrieDetails, setCountrieDetails] = useState([]);
    const {name} = useParams();



    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => setCountrieDetails(data))
    },[])

// console.log(countrieDetails)
    return (
        <div className="countrie-Detail">
            {
             countrieDetails.map(countrie => <Detail countires={countrie}></Detail>)
            }
        </div>
    );
};

export default CountriesDetails;