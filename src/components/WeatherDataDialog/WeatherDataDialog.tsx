import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./weather-data.css";
import { WeatherData } from "./type";

const WeatherDataDialog = () => {
  const data = useLoaderData() as WeatherData;
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, marginBottom: 300 }}
      whileInView={{ opacity: 1, marginBottom: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="containerWeather">
        <p className="header">
          <svg
            width="24"
            height="24"
            className="arrow"
            color="rgb(84, 194, 238)"
            onClick={goBackHandler}
          >
            <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
          </svg>
          Weather App
        </p>

        <img
          src={data.current.condition.icon}
          alt="Weather Icon"
          className="weatherIcon"
        />
        <p className="temperature">{data.current.temp_c}° C</p>
        <p className="weatherText">{data.current.condition.text}</p>

        <div className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="locationIcon"
            viewBox="0 0 200 200"
            spacing="preserve"
          >
            <path
              fill="#282828"
              d="M100.232 149.198c-2.8 0-5.4-1.8-7.2-5.2-22.2-41-22.4-41.4-22.4-41.6-3.2-5.1-4.9-11.3-4.9-17.6 0-19.1 15.5-34.6 34.6-34.6s34.6 15.5 34.6 34.6c0 6.5-1.8 12.8-5.2 18.2 0 0-1.2 2.4-22.2 41-1.9 3.4-4.4 5.2-7.3 5.2zm.1-95c-16.9 0-30.6 13.7-30.6 30.6 0 5.6 1.5 11.1 4.5 15.9.6 1.3 16.4 30.4 22.4 41.5 2.1 3.9 5.2 3.9 7.4 0 7.5-13.8 21.7-40.1 22.2-41 3.1-5 4.7-10.6 4.7-16.3-.1-17-13.8-30.7-30.6-30.7z"
            />
            <path
              fill="#282828"
              d="M100.332 105.598c-10.6 0-19.1-8.6-19.1-19.1s8.5-19.2 19.1-19.2c10.6 0 19.1 8.6 19.1 19.1s-8.6 19.2-19.1 19.2zm0-34.3c-8.3 0-15.1 6.8-15.1 15.1s6.8 15.1 15.1 15.1 15.1-6.8 15.1-15.1-6.8-15.1-15.1-15.1z"
            />
          </svg>
          {`${data.location.name}, ${data.location.region}, ${data.location.country}`}
        </div>

        <div className="atmosData">
          
          
          <div className="box feelsLikeTemp">
            <svg data-name="Layer 1" className="icon" viewBox="0 0 64 64"><path d="M35.9 35.84V14.21a4 4 0 0 0-3.52-4.05A3.9 3.9 0 0 0 28.1 14v21.85a1 1 0 0 1-.54.85 9.92 9.92 0 1 0 8.88 0 1 1 0 0 1-.54-.86z " style={{fill: "#156cdd"}} /><path d="M28.1 27v8.82a1 1 0 0 1-.54.85 9.92 9.92 0 1 0 8.88 0 1 1 0 0 1-.54-.86V27z" style={{fill: "#0795ff"}} /><path style={{fill: "#fff"}}  d="M28.1 27.03h7.8v1.43h-7.8z"/><path d="M36.7 36.11a1 1 0 0 1-.57-.9V12.3A4.25 4.25 0 0 0 32.41 8a4.12 4.12 0 0 0-4.54 4.11v23.1a1 1 0 0 1-.57.9 10.5 10.5 0 1 0 9.4 0zm.63 15.35a7.91 7.91 0 0 1-6.25 2 8 8 0 0 1-2.66-15.11 3.49 3.49 0 0 0 1.95-3.13V12.13a1.59 1.59 0 0 1 .54-1.21A1.64 1.64 0 0 1 32 10.5h.17a1.76 1.76 0 0 1 1.46 1.79v22.92a3.51 3.51 0 0 0 1.95 3.14 8 8 0 0 1 1.75 13.11z" style={{fill: "#dfe8f4"}} /></svg>
            <p className="text"><span className="value">{data.current.feelslike_c + "° C"}</span><br />Feels like</p>
          </div>
          <div className="box humidity">
            <svg data-name="Layer 1" className="icon" viewBox="0 0 512 512"><path d="M504.08 256C504.08 119 393 7.92 256 7.92S7.92 119 7.92 256 119 504.08 256 504.08 504.08 393 504.08 256z" style={{fill: "#25b7d3"}}/><path d="M289.15 157.48A306.25 306.25 0 0 1 256 84.69a306.22 306.22 0 0 1-33.14 72.8c-28.24 56.86-73.39 86.85-73.39 158.38 0 61.55 45 111.44 106.53 111.44 61.55 0 106.53-49.89 106.53-111.44.01-71.54-45.14-101.52-73.38-158.39z" style={{fill: "#91c5ce"}} /><path d="M289.15 157.48A306.25 306.25 0 0 1 256 84.69s-61.57 342.62 0 342.62c61.55 0 106.53-49.89 106.53-111.44.01-71.54-45.14-101.52-73.38-158.39z" style={{fill: "#b9e4ea"}}/><path d="M262.08 409.12c48.17 0 83.38-39 83.38-87.22.01-55.99-131.55 87.22-83.38 87.22z" style={{fill: "#f2f7f7"}} /></svg>
            
            <p className="text"> <span className="value">{data.current.humidity + "%"}</span><br />Humidity</p>
          </div>
          <div className="box cloud">
            <svg spacing="preserve" className="icon" viewBox="0 0 6.827 6.827"><g id="Layer_x0020_1"><g id="_491468336"><path id="_491468504" style={{fill: "none"}} d="M0 0h6.827v6.827H0z"/><path id="_491468600" style={{fill: "none"}} d="M.853.853h5.12v5.12H.853z"/></g><g id="_491467592"><path id="_491468432" d="M3.413 1.808c-.68-.462-1.681.014-1.598 1.083-1.457.343-1.14 2.304.157 2.304h1.441V1.808z" style={{fill: "#00b0ff"}} /><path id="_491468408" d="M4.853 5.195c.617 0 1.12-.519 1.12-1.156 0-.597-.41-1.039-.965-1.145-.261-.482-.645-.655-1.17-.568a1.244 1.244 0 0 0-.421-.515l-.004-.003v3.387h1.44z" style={{fill: "#4fc3f7"}} /></g></g></svg>
            
            <p className="text"> <span className="value">{data.current.cloud + "%"}</span> <br />Clouds</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherDataDialog;
