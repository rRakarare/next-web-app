import { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { Form, FormWrap, Input } from "./login-styles";
import { Button } from "./../Basic/Button";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();

    signIn("credentials", {
      username,
      password,
      callbackUrl: `${window.location.origin}/`,
      redirect: false,
    }).then(function (result) {
      if (result.error !== null) {
        if (result.status === 401) {
          setLoginError(
            "Your username/password combination was incorrect. Please try again"
          );
        } else {
          
          setLoginError(result.error);
        }
      } else {
        router.push(result.url);
      }
    });
  };

  return (
    <FormWrap>
      <Form onSubmit={handleLogin}>
        <Image src={"/analyzer_light.svg"} alt="logo" width={100} height={70} />
        <h2 style={{ color: "white" }}>LOGIN</h2>
        <Input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUser(e.target.value)}
        />

        <Input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          width={"100%"}
          style={{ marginTop: "1rem" }}
          color="primary"
          type="submit"
        >
          Login
        </Button>
        <p style={{ color: "white" }}>{loginError}</p>
      </Form>
    </FormWrap>
  );
};

export default Login;
