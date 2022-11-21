import { useState } from "react";
import Input from "../components/Forms/Input";
import InputForm from "../components/Forms/InputForm";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../components/UI/ErrorModal";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState(false);

    const closeModal = () => {
      setErrorRegister(false);
    };

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
    if (data.status === "ok") {
      navigate("/login");
    } else if (data.status === "error") {
      setEmail("");
      setPassword("");
      setUsername("");
      setErrorRegister(true);
    }
  };

  return (
    <main className="bg-gradient-to-r from-backgroundGradient1 to-backgroundGradient2 w-screen h-screen relative flex justify-center items-center">
      {errorRegister && (
        <ErrorModal
          onOkay={closeModal}
          title='Sprobuj ponownie'
          message="Podany email lub username sa zajete"
        />
      )}
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
    </main>
  );
};
export default Register;
