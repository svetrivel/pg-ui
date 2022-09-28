import styles from "./LoginPage.module.css";
import React from "react";
import Login from "../Components/Login/Login";

const LoginPage = (prop) => {
  const submitHandler = (loginDetail) => {
    prop.onLogin(loginDetail);
  };
  return (
    <React.Fragment>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className={styles.LoginForm}>
          <Login onSubmit={submitHandler} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
