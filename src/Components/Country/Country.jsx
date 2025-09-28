import React, { useState } from 'react';
import "./Country.css"

const Country = ({country,handleVisitedCountries}) => {
    const [visited,setVisited] = useState(false);

    const visitedHandler = () =>{
        const newVisited = !visited;
        setVisited(newVisited);
        handleVisitedCountries(country,newVisited);
    }
    //console.log(country);
    const countryName = country.name.common;
    const countryFlag = country.flags.flags;
    const countryCapital = country.capital.capital;
    const countryPopulation = country.population.population;
    const countryRegion = country.region.region;
    

    return (
        <div className={`country ${visited? "bg-grey" : ""}`}>
            <img src={countryFlag.png} alt={countryFlag.alt} />
            <h3>Name: {countryName} </h3>
            <p>Capital: {countryCapital}</p>
            <p>Population: {countryPopulation}</p>
            <p>Region: {countryRegion}</p>
            <button onClick={visitedHandler}>{visited ? "Visited" : "Not Visited"}</button>
        
        </div>
    );
};

export default Country;