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
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            className="arrow"
            onClick={goBackHandler}
          >
            <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path>
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
            viewBox="0 0 24 24"
            className="locationIcon"
            id="location"
          >
            <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
          </svg>
          {`${data.location.name ? data.location.name + "," : ""} ${
            data.location.region ? data.location.region + "," : ""
          } ${data.location.country}`}
        </div>

        <div className="atmosData">
          <div className="box feelsLikeTemp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              className="icon"
              id="temperature"
            >
              <path
                fill="#57565c"
                d="M21 4H17a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM19 6H17a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM21 8H17a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM19 10H17a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM21 12H17a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"
              ></path>
              <circle cx="5" cy="4.5" r="1" fill="#57565c"></circle>
              <path
                fill="#54bbe8"
                d="M15,16.05V2.5a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2V16.05a4,4,0,1,0,4,0Z"
              ></path>
              <path
                fill="#e23342"
                d="M13,18a.5.5,0,0,1-.5-.5V3.5a.5.5,0,0,1,1,0v14A.5.5,0,0,1,13,18Z"
              ></path>
              <path
                fill="#57565c"
                d="M9,12H8A2.5,2.5,0,0,1,5.5,9.5v-1A2.5,2.5,0,0,1,8,6H9A.5.5,0,0,1,9,7H8A1.5,1.5,0,0,0,6.5,8.5v1A1.5,1.5,0,0,0,8,11H9a.5.5,0,0,1,0,1Z"
              ></path>
              <circle cx="13" cy="19.5" r="2" fill="#e23342"></circle>
            </svg>
            <p className="text">
              <span className="value">{data.current.feelslike_c + "° C"}</span>
              <br />
              Feels like
            </p>
          </div>
          <div className="box humidity">
            <svg
              image-rendering="optimizeQuality"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              viewBox="0 0 6.827 6.15"
              id="humidity"
              className="icon"
            >
              <path
                fill="#1e88e5"
                d="M3.442.885c.247.268.483.547.703.837.184.245.358.498.513.762.234.4.437.844.53 1.3.035.178.055.359.05.54a1.82 1.82 0 0 1-.07.464c-.078.27-.223.508-.43.7-.354.33-.846.485-1.325.485-.478 0-.97-.156-1.325-.485a1.527 1.527 0 0 1-.43-.7 1.82 1.82 0 0 1-.07-.464c-.004-.181.015-.362.051-.54.093-.456.296-.9.53-1.3.155-.264.329-.517.513-.762.22-.29.456-.569.703-.837l.029-.032.028.032z"
              ></path>
              <path
                fill="#fff"
                d="M3.138 3.557a.252.252 0 0 0-.196-.083c-.08 0-.145.025-.192.091a.4.4 0 0 0-.07.239c0 .09.014.197.076.267a.24.24 0 0 0 .188.084c.078 0 .14-.029.192-.086a.372.372 0 0 0 .08-.254c0-.09-.016-.19-.079-.258zM3.734 3.434 2.947 4.95h.148l.784-1.516zM3.873 4.229c-.08 0-.146.025-.194.09a.4.4 0 0 0-.07.24c0 .09.015.197.077.267a.24.24 0 0 0 .188.084.249.249 0 0 0 .193-.085.372.372 0 0 0 .08-.255c0-.09-.016-.19-.078-.257a.252.252 0 0 0-.196-.084z"
              ></path>
              <path
                fill="#1e88e5"
                d="M3.03 3.703a.11.11 0 0 0-.084-.037c-.035 0-.064.012-.084.04a.174.174 0 0 0-.03.104c0 .039.006.085.033.116a.104.104 0 0 0 .081.036c.034 0 .061-.012.084-.037a.161.161 0 0 0 .034-.11c0-.04-.006-.083-.034-.112zm.93.755a.11.11 0 0 0-.084-.036c-.035 0-.063.01-.084.04a.174.174 0 0 0-.03.103c0 .04.006.086.033.116a.104.104 0 0 0 .082.037c.033 0 .06-.013.083-.038a.161.161 0 0 0 .035-.11c0-.039-.007-.082-.035-.112z"
              ></path>
              <path fill="none" d="M0 0h6.827v6.827H0z"></path>
            </svg>

            <p className="text">
              {" "}
              <span className="value">{data.current.humidity + "%"}</span>
              <br />
              Humidity
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherDataDialog;
