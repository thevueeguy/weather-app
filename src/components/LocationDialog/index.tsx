import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

const LocationDialog = () => {
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const [locationLoading, setLocationLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleSubmit = () => {
    navigate(`/weather/${location}`);
  };

  const getDeviceLocation = () => {
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos: GeolocationPosition) => {
        const crd = pos.coords;
        const lat = crd.latitude.toString();
        const lng = crd.longitude.toString();

        try {
          const res = await fetch(
            `https://us1.locationiq.com/v1/reverse.php?key=${import.meta.env.VITE_LOCATION_IQ_TOKEN}&lat=` + lat + "&lon=" + lng + "&format=json"
          );
          const data = await res.json();
          setLocation(data.address.city);
        } catch (err) {
          setError("Unable to fetch the location!");
        } finally {
          setLocationLoading(false);
        }
      },
      (err: GeolocationPositionError) => {
        console.log(err.message);
        setLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  return (
    <motion.div
      className="locationDialog"
      initial={{ opacity: 0, marginBottom: 300 }}
      whileInView={{ opacity: 1, marginBottom: 0 }}
      transition={{ duration: 0.75 }}
    >
      <p className="heading">Weather App</p>

      <DebounceInput
        minLength={3}
        value={location}
        debounceTimeout={200}
        className="locationInput"
        placeholder="Enter city name"
        onChange={(event) => setLocation(event.target.value)}
      />

      <div className="break">
        <div /> or <div />
      </div>

      <button
        className="getLocationBtn"
        onClick={getDeviceLocation}
        disabled={locationLoading}
      >
        {locationLoading ? (
          <div className="loader"></div>
        ) : (
          "Get Device Location"
        )}
      </button>

      <div className="submitBtnContainer">
        <button
          type="submit"
          className="submitBtn"
          disabled={location === ""}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </motion.div>
  );
};

export default LocationDialog;
