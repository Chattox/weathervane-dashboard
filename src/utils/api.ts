import axios from "axios";

const dbUrl = import.meta.env.PROD
  ? import.meta.env.PUBLIC_PROD_DB_URL
  : import.meta.env.PUBLIC_DEV_DB_URL;

export const getAllReadings = (station: string = "null") => {
  return axios
    .get(`${dbUrl}/all`, { params: { station: station } })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getLatestReading = (station: string = "null") => {
  return axios
    .get(`${dbUrl}/latest`, { params: { station: station } })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getStations = () => {
  return axios
    .get(`${dbUrl}/stations`)
    .then((res) => res.data.stations)
    .catch((err) => console.log(err));
};
