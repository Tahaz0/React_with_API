import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [show, setShow] = useState(false);

  const handelMenuToggle = () => {
    return setShow(!show);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="Logo">
              <Link to="/">
                <h1>WorldAtlas</h1>
              </Link>
            </div>

            <nav className={show ? "menu-mobile" : "menu-web"}>
              <ul>
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li>
                  <NavLink to="/country">COUNTRY</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </nav>

            <div className="ham-menu">
              <button onClick={handelMenuToggle}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
