import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const userToken = localStorage.getItem("TOKEN");
  let auth = { token: userToken };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
