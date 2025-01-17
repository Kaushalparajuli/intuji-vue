import axios from "axios";
export default function  useApi (){
  const axiosInstance = axios.create();
  axiosInstance.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.baseURL = import.meta.env.VITE_API_URL;
    return config;
  });

  return axiosInstance;
}

