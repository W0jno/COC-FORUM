import { useState } from "react";
import Input from "../components/Forms/Input";
import InputForm from "../components/Forms/InputForm";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../components/UI/ErrorModal";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  const closeModal = () => {
    setErrorLogin(false);
  }

  const loginUser = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      navigate("../");
    }
    else if (data.status === "error") {
      setEmail("");
      setPassword("");
      setErrorLogin(true);
    }
  };

  return (
    <main className="bg-gradient-to-r from-backgroundGradient1 to-backgroundGradient2 w-screen h-screen relative flex justify-center items-center">
      {errorLogin && (
        <ErrorModal
          onOkay={closeModal}
          title="Sprobuj ponownie"
          message="Zly email lub haslo"
        />
      )}
      <InputForm onSubmit={loginUser} btnText={"LOGIN"}>
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
    </main>
  );
};
export default Login;
