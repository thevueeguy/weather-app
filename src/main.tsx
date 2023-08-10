import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import App from "./App.tsx";
import WeatherDataDialog from "./components/WeatherDataDialog/WeatherDataDialog.tsx";
import NotFound from "./components/NotFound/index.tsx";
import FallbackComponent from "./components/FallbackComponent/index.tsx";
import { WeatherData } from "./components/WeatherDataDialog/type";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} errorElement={<NotFound />} />,
    <Route
      path="weather/:location"
      loader={async ({ params }): Promise<WeatherData> => {
        if (!params.location) throw redirect("/");

        try {
          // const res = await fetch(
          //   `https://api.weatherapi.com/v1/current.json?q=${
          //     params.location
          //   }&key=${import.meta.env.VITE_WEATHER_API_KEY}`
          // );
          // const data: WeatherData = await res.json();

          return "data";
        } catch (err) {
          throw redirect("/");
        }
      }}
      errorElement={<FallbackComponent />}
      element={<WeatherDataDialog />}
    />
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
