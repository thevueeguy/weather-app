import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import App from "./App.tsx";
import FallbackComponent from "./components/FallbackComponent/index.tsx";
import NotFound from "./components/NotFound/index.tsx";
import WeatherDataDialog from "./components/WeatherDataDialog/index.tsx";
import { WeatherData } from "./components/WeatherDataDialog/type";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} errorElement={<NotFound />} />,
    <Route
      path="weather/:location"
      loader={async ({ params }): Promise<WeatherData> => {
        
        if (!params.location) throw new Response("Not Found", { status: 404 });

        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?q=${
              params.location
            }&key=${import.meta.env.VITE_WEATHER_API_KEY}`
          );

          const data = await res.json();

          if(data.error)
            throw new Error(data.error.message);
          else
            return data as WeatherData;

        } catch (err: unknown) {
          console.log(err)
          let errorMessage =  "Failed to do something exceptional";
          if (err instanceof Error) {
            errorMessage = err.message;
          }
          throw new Response(errorMessage, { status: 404 });
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
