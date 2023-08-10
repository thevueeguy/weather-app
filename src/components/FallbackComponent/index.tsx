import { motion } from "framer-motion";
import "./text.css";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const FallbackComponent = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.data;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  const goBackHandler = () => {
    navigate(-1);
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
          {errorMessage}
        </p>
        <button className="submitBtn" onClick={goBackHandler}>
          Go back
        </button>
      </div>
    </motion.div>
  );
};

export default FallbackComponent;
