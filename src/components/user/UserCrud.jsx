import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Users",
  subtitle: "create user: crud",
};

const baseUrl = "http://localhost:3001/users/";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class Usercrud extends Component {
  state = { ...initialState };

  clear() {
    this.setState({ user: initialState.user });
  }

  render() {
    return <Main {...headerProps}>Users</Main>;
  }
}
