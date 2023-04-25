import React from "react";
// import { NavLink } from "react-router-dom";
import axios from "axios";

const FirstScreen = () => {
  const [data, setData] = React.useState({ home: "", login: "" });
  async function home() {
    axios.get("https://drdeepu.pythonanywhere.com/").then((res) => {
      setData({ ...data, home: res.data });
    });
  }
  async function login() {
    axios.get("https://drdeepu.pythonanywhere.com/login").then((res) => {
      setData({ ...data, login: res.data });
    });
  }
  home();
  login();
  return (
    <>
      <div>Data is : {data.home}</div>
      <div>Login is : {data.login}</div>
    </>
  );
};

export default FirstScreen;
