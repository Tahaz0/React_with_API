import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// pages import start =====================
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import Home from "./Pages/Home";
import AppLayouts from "./components/AppLayouts";
import ErrorPage from "./Pages/ErrorPage";
import CountryDetails from "./components/CountryDetails";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayouts />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <CountryDetails />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
