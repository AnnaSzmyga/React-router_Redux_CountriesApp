import React from 'react';
import CountryFlag from './flag.component';
import { Link } from 'react-router';

const CountryFlagList = (props) => (
    <div className="countries-list">
        {props.countries.map(country => {
            return (
                <div className="single-country" key={country.id}>
                    <Link  className='logo' to={'countries/country/' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                </div>
            )
        })}
    </div>
);

export default CountryFlagList;