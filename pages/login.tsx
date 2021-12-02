import { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";



const login = () => {
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
    <form onSubmit={handleLogin}>
      {loginError}
      <label>
        Email:{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit login</button>
    </form>
  );
};

export default login;
