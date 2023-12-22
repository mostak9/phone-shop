import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://phone-shop-server-nine.vercel.app",
});
const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
