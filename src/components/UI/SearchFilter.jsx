const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handelInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handelSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "ase"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <>
      <h2 className="container-title">HERE ARE ALl THE COUNTRIES</h2>
      <section className="section-searchFilter container">
        <div>
          <input
            className="select-section"
            type="text"
            placeholder="search"
            value={search}
            onChange={handelInputChange}
          />
        </div>

        <div>
          <button onClick={() => sortCountries("ase")}>Ascending</button>
        </div>
        <div>
          <button onClick={() => sortCountries("des")}>Decending</button>
        </div>
        <select
          className="select-section"
          value={filter}
          onChange={handelSelectChange}
        >
          <option value="">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
    </>
  );
};

export default SearchFilter;
