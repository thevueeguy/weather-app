import { motion } from "framer-motion";
import "./text.css";
import { useNavigate } from "react-router-dom";

const FallbackComponent = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/");
  }

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, marginBottom: 300 }}
      whileInView={{ opacity: 1, marginBottom: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="container2">
        <p className="errorText">
          Unable to fetch the weather data, <br />
          please try again later.
        </p>
        <button className="submitBtn" onClick={goBackHandler}>
          Go back
        </button>
      </div>
    </motion.div>
  );
};

export default FallbackComponent;
