import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OPPs! page dont exist</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button>GO HOME</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
