import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Login from "../Users/Login/Login";
import SignUp from "../Users/SignUp/SignUp";
import Page from "../page/page";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/dashboard" Component={Dashboard}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/signUp" Component={SignUp}></Route>
      <Route path="/page" Component={Page}></Route>
    </Routes>
  );
}
