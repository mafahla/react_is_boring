import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../Components/SideBar/Sidebar";

// import Bookings from "../pages/Bookings";
// import SellCar from "../pages/SellCar";
// import Settings from "../pages/Settings";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
    

    </Routes>
  );
};

export default Router;