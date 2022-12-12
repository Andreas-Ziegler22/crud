import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";

import Home from "../components/home/Home";
import Usercrud from "../components/user/UserCrud";

export default (props) => (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Usercrud} />
    <Redirect from="*" to="/" />
  </Routes>
);
