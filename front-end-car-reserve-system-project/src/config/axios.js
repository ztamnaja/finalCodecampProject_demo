import axios from "axios";
import LocalStorageService from "../services/localStorage";
import { notification } from "antd";

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
  (config) => {
    if (
      config.url.includes("/user/login") ||
      config.url.includes("/user/register")
    ) {
      return config;
    }

    const token = LocalStorageService.getToken();
    if (token) {
      console.log(token);
      console.log(config);
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      LocalStorageService.removeToken();
      window.location.reload();
      notification.error({ message: "plase login" });
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

export default axios;
