import { useAuth } from "hooks/useAuth";
import { useState } from "react";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return <h1>Login Page</h1>;
};
