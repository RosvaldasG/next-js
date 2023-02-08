import Link from "next/link";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import styles from "./signup.module.css";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = () => {
    const signupData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(signupData);

    axios
      .post("http://localhost:3002/user", signupData)
      .then((res) => {
        console.log(res.data.jwt_token);
        console.log(res.data);
        localStorage.setItem("user_jwt", res.data.jwt_token);
        document.cookie = `jwt_token= ${res.data.jwt_token}`;
        alert(res.data.response);
        Router.push("/");
      })
      .catch((err) => {
        console.log(err.response.data.response);
        alert(err.response.data.response);
      });

    // fetch("http://localhost:3002/user", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(signupData),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error();
    //     }

    //     return res.json();
    //   })
    //   .then((data) => {
    //     alert("registracija sėkminga!!!");
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     alert("Toks vartotojas jau yra");
    //     console.log("err", err);
    //   });
  };
  return (
    <>
      <h1>SignUp</h1>
      <div className={styles.inputWraper}>
        <Input type="text" onChange={setName} value={name} placeholder="Name" />
        <Input
          type="email"
          onChange={setEmail}
          value={email}
          placeholder="e-mail"
        />
        <Input
          type="password"
          onChange={setPassword}
          value={password}
          placeholder="password"
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="SignUp" />
      </div>

      <div>
        <Link href="/">Back</Link>
      </div>
    </>
  );
};

export default Signup;
