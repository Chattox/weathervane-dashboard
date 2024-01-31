import axios from "axios";

const dbUrl = import.meta.env.PROD
  ? import.meta.env.PUBLIC_PROD_DB_URL
  : import.meta.env.PUBLIC_DEV_DB_URL;

export const getAllReadings = () => {
  return axios
    .get(`${dbUrl}/all`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getLatestReading = () => {
  return axios
    .get(`${dbUrl}/latest`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
