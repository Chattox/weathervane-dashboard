import axios from "axios";

export const getAllReadings = () => {
  const dbUrl = import.meta.env.PROD
    ? import.meta.env.PUBLIC_PROD_DB_URL
    : import.meta.env.PUBLIC_DEV_DB_URL;

  return axios
    .get(`${dbUrl}/all`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
