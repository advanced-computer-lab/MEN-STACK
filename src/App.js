import { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import useLocalStorage from "./Hooks/useLocalaStorage";
import { UserContext } from "./Context/UserContext";

import None from "./components/None/None";
import AdminHomepage from "./components/AdminHomepage/AdminHomepage";
import UserHomepage from "./components/UserHomePage/UserHomepage";
import CreateFlight from "./components/CreateFlight/CreateFlight";
import UserProfile from "./components/UserProfile/UserProfile";
import Login from "./components/Login/Login";
import ReservedFlights from "./components/ReservedFlights/ReservedFlights";
import PlaneSeats from "./components/planeSeats/planeSeats";
import SummaryConfirm from "./components/SummaryConfirm/SummaryConfirm";
import ConfirmedFlight from "./components/ConfirmedFlight/ConfirmedFlight";
import SignUp from "./components/SignUp/SignUp";
import { Box } from "@mui/material";
import background from "./Images/Background.jpg";
import backgroundA from "./Images/BackgroundA.jpg";

const App = () => {
  const [user, setUser] = useLocalStorage("Authentication", { s: "asd" });
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  axios.interceptors.request.use(function (config) {
    if (user.token) {
      const token = user.token;
      config.headers.authorization = token;
    }
    return config;
  });
  return (
    <Router className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Box
          p={0}
          sx={{
            minHeight: "100%",
            position: "absolute",
            overflow: "auto",
            width: "100%",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "repeat-y",
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AdminHomepage />} />
            {user.token && user.type && user.type === "admin" && (
              <Route path="/CreateFlight" element={<CreateFlight />} />
            )}
            <Route path="/AdminHomepage" element={<AdminHomepage />} />
            <Route path="/HomePage" element={<UserHomepage />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ReservedFlights" element={<ReservedFlights />} />
            <Route path="/*" element={<None />} />
            <Route path="/SummaryConfirm" element={<SummaryConfirm />} />
            <Route path="/ConfirmedFlight" element={<ConfirmedFlight />} />
            <Route path="/planeSeats" element={<PlaneSeats />} />
          </Routes>
        </Box>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
