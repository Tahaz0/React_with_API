import { useEffect, useState, useTransition } from "react";
import Loader from "../components/UI/Loader";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPanding, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPanding) {
    return (
      <h1>
        LOading....
        <Loader />
      </h1>
    );
  }

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const selectRegion = (country) => {
    if (filter === "all") {
      return country;
    }
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && selectRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((currCountry, i) => {
          return <CountryCard country={currCountry} key={i} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
