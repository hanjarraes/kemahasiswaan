import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const TheLayout = () => {
  //   const dispatch = useDispatch();
  //   const user = useSelector((state) => state.login.user);

  //   if (user) {
  //     axios.defaults.baseURL = endpoints.env.REACT_APP_API_URL;
  //     axios.defaults.paramsSerializer = { indexes: null };
  //     axios.defaults.headers.common["Content-Type"] = "application/json";
  //     axios.defaults.headers.common.Accept = "application/json";
  //     // axios.defaults.headers.common.Authorization = `Bearer ${user.access_token}`;
  //     axios.defaults.headers.common.userLevel = user.userLevel || "";
  //     axios.defaults.timeout = 500000;

  //     axios.interceptors.request.use((request) => request);

  //     axios.interceptors.response.use(
  //       (response) => response,
  //       (error) => {
  //         if (error?.response?.status === 401) {
  //           dispatch({ type: "SET_EXPIRED", payload: true });
  //         }
  //         return Promise.reject(error);
  //       }
  //     );
  //   }

  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default TheLayout;
