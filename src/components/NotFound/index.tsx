import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.data;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div id="main">
      <div className="error">
        <p>Oops!</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
