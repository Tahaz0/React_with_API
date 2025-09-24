import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One country at a Time.
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            tempora ab iste! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nemo tempora ab iste!
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />{" "}
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/world.png" alt="" className="banner-image" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
