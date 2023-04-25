import React from "react";
import axios from "axios";

const FirstScreen = () => {
  const [data, setData] = React.useState({ home: "", login: "" });
  const [trigger, setTrigger] = React.useState(true);
  async function home() {
    axios.get("https://drdeepu.pythonanywhere.com/").then((res) => {
      setData({ ...data, home: res.data });
      console.log(res);
    });
  }
  async function login() {
    axios.get("https://drdeepu.pythonanywhere.com/login").then((res) => {
      setData({ ...data, login: res.data });
      console.log(res);
    });
  }
  React.useEffect(() => {
      login();
    home();
    setTrigger(false);
  }, [trigger]);
  return (
    <>
      <div>Data is : {data.home}</div>
      <div>Login is : {data.login}</div>
    </>
  );
};

export default FirstScreen;
