import React from "react";
import axios from "axios";

const FirstScreen = () => {
  const [data, setData] = React.useState({ username: "", password: "" });

  async function login() {
    axios
      .get("https://drdeepu.pythonanywhere.com/login", ...data)
      .then((res) => {
        console.log(res);
      });
  }
  React.useEffect(() => {
    login();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, username: e.target.value });
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </>
  );
};

export default FirstScreen;
