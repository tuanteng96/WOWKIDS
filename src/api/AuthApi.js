import axiosClient from "./axiosClient";

const checkToken = () => {
  return axiosClient.get(`/token`);
};

const AuthApi = {
  checkToken,
};
export default AuthApi;
