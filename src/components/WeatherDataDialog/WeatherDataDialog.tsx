import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
import { WeatherData } from "./type";

const WeatherDataDialog = () => {
  const data = useLoaderData() as WeatherData;

  return (
      <motion.div
        className="container"
        initial={{ opacity: 0, marginBottom: 300 }}
        whileInView={{ opacity: 1, marginBottom: 0 }}
        transition={{ duration: 0.75 }}
      >
        <div className="locationDialog">
          <p className="heading">
            <svg
              width="24"
              height="24"
              className="arrow"
              color="rgb(84, 194, 238)"
            >
              <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
            </svg>
            Weather App
          </p>

          <img src={data.current.condition.icon} alt="" />
        </div>
      </motion.div>
  );
};

export default WeatherDataDialog;
