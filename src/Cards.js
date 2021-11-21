import React from "react";

export const InfoCards = (props) => {
  return (
    <div className="outer-wrapper">
      <div className="cards-wrapper">
        {props.allCountries.map((country, index) => (
          <div className="card" key={index}>
            <div className="img-wrapper">
              <img
                className="card-img-top flag"
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{country.name}</h5>
              <div className="card-text-area">
                <ul>
                  <li>
                    <p className="bold">
                      Population:<span> {country.population}</span>
                    </p>
                  </li>
                  <li>
                    <p className="bold">
                      Region:<span> {country.region}</span>
                    </p>
                  </li>
                  <li>
                    <p className="bold">
                      Capital:<span> {country.capital}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
