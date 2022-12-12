import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Users",
  subtitle: "create user: crud",
};

export default class Usercrud extends Component {
  render() {
    return <Main {...headerProps}>Users</Main>;
  }
}
