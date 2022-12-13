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

  save() {
    const user = this.setState.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  }

  getUpdatedList(user) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    list.unshift(user);
    return list;
  }

  render() {
    return <Main {...headerProps}>Users</Main>;
  }
}
