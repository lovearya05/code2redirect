import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Splash from "../screens/splash/Splash";
import Signup from "../screens/signup/Signup";
import Login from "../screens/Login/Login";
import ThankYou from "../screens/ThankYouPage/ThankYou";
import PrivacyPolicy from "../screens/privacyPolicy/PrivacyPolicy";

export default function RoutesServer() {

  return (
    <div style={{ width: "100%" }}>

        <Routes>
          <Route exact path="/" element={<Splash />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/thankYou" element={<ThankYou />}></Route>
          <Route exact path="/privacy" element={<PrivacyPolicy />}></Route>
        </Routes>

    </div>
  );
}
