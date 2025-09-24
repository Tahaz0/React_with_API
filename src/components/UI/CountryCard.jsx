import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-green-box">
        <img src={flags.svg} alt={flags.alt} />

        <div className="countryInfo">
          <p className="card-title">{name.common}</p>

          <p>
            <span className="card-description">POPULATION: </span>
            {population.toLocaleString()}
          </p>

          <p>
            <span className="card-description">REGION: </span>
            {region}
          </p>

          <p>
            <span className="card-description">CAPITAL: </span>
            {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
