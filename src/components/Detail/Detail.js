import React from 'react';
import './Detail.css'
const Detail = (props) => {
    const {flags,area,languages,name,population,region,subregion}= props.countires;
    console.log(props)
    return (
        <div className="detail-box">
            <img src={flags.png} alt="" />
            <p><b>Name: </b>{name.common}</p>
            <p><b>Area:</b> {area}</p>
            <p><b>Languages:</b> {languages.fra}</p>
            <p><b>Population:</b> {population}</p>
            <p><b>Region:</b> {region}</p>
            <p><b>Subregion:</b> {subregion}</p>
        </div>
    );
};

export default Detail;