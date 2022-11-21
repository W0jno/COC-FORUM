import { useEffect } from "react";
import Navbar from "../components/Header/Navbar";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const token = jwtDecode(Cookies.get("JWT"));
      console.log(token);

      if (token.id) {
        setAuthStatus(true);
      } else {
        setAuthStatus(false);
      }
    } catch (err) {
      Cookies.remove("JWT");
      setAuthStatus(false);
    }
  });

  const logoutHandler = () =>{
    Cookies.remove("JWT");
    setAuthStatus(false);
    window.location.reload(false);
  }
  return (
    <>
      {authStatus && <Navbar onLogout={logoutHandler} isLoggedIn={true} />}
      {!authStatus && <Navbar isLoggedIn={false} />}
    </>
  );
};

export default Home;
