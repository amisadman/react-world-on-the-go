import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setvisitedCountries] = useState([]);

  const handleVisitedCountries = (country, state) => {
    //console.log("visited Country clicked", country);
    if (state) {
      const newVisitedCountries = [...visitedCountries, country];
      setvisitedCountries(newVisitedCountries);
    }else{
        let newVisitedCountries = [];
        visitedCountries.forEach(visitedCountry => {
            if(visitedCountry != country)newVisitedCountries.push(visitedCountry);
            console.log(visitedCountry)
            setvisitedCountries(newVisitedCountries);
        })
    }
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>Visited Countries: {visitedCountries.length}</h1>
      <ol>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
