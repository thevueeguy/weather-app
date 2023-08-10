import { useLoaderData } from "react-router-dom";

const WeatherDataDialog = () => {
  const data = useLoaderData();

  console.log(data)
  return <div></div>;
};

export default WeatherDataDialog;
