import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://192.168.68.105:5000",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
