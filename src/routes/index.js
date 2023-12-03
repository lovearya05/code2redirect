import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Splash from "../screens/splash/Splash";
import Signup from "../screens/signup/Signup";
import Login from "../screens/Login/Login";
import ThankYou from "../screens/ThankYouPage/ThankYou";

export default function RoutesServer() {

  return (
    <div style={{ width: "100%" }}>

        <Routes>
          <Route exact path="/code2redirect/" element={<Splash />}></Route>
          <Route exact path="/code2redirect/signup" element={<Signup />}></Route>
          <Route exact path="/code2redirect/login" element={<Login />}></Route>
          <Route exact path="/code2redirect/thankYou" element={<ThankYou />}></Route>
        </Routes>

    </div>
  );
}
