export type WeatherData = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    cloud: number;
    feelslike_c: number;
  };
};
