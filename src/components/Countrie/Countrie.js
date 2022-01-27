import React from 'react';
import { Link } from 'react-router-dom';
import './Countrie.css'

const Countrie = (props) => {
    const {name, flags} = props.countries;
    // console.log(props.countries)
    return (
        <div className="all-box">
            <div className="countries-box">
                <img src={flags.svg} alt="" />
            <p><b>countrie: </b>{name.common}</p>
            
            <Link to={`countrie/${name.common}`}><button className="countrie-btn">countrie Details</button></Link>
        </div>
        </div>
    );
};

export default Countrie;