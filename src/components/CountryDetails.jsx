import { useEffect, useState, useTransition } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryDesails } from "../api/postApi";
import Loader from "./UI/Loader";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryDesails(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending)
    return (
      <h1>
        Loading....
        <Loader />
      </h1>
    );
  return (
    <section className="card container country-details-card">
      <div className="container-card bg-blue-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.png}
              alt="country.flags.alt"
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{country.name.official}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <Link to="/country" className="backBtn">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
