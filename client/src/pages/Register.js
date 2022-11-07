import { useState } from "react";
import Input from "../components/Forms/Input";
import Card from "../components/UI/Card/Card";
import InputForm from "../components/Forms/InputForm";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
      <InputForm onSubmit={registerUser} btnText="REGISTER">
        <Input
          value={username}
          label="Username"
          id="username"
          type="username"
          placeholder="example"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="E-mail"
          id="email"
          type="email"
          placeholder="example@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </InputForm>
  );
};
export default Register;
