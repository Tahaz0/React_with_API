import CountryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here Are The Interisting Facts
        <br />
        We're proud of
      </h2>

      <div className="gradient-cards ">
        {CountryFacts.map(
          ({ id, countryName, capital, population, interestingFact }) => {
            return (
              <div className="card hover-effect" key={id}>
                <div className="container-card bg-yellow-box">
                  <p className="card-title">{countryName}</p>
                  <p>
                    <span className="card-description">CAPITAL:</span>
                    {capital}
                  </p>
                  <p>
                    <span className="card-description">POPULATION:</span>
                    {population}
                  </p>
                  <p>
                    <span className="card-description">INTERESTING FACT:</span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default About;
