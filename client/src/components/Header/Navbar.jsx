import ButtonNavbar from "./ButtonNavbar";
import logo from "../../assets/logo-navbar.png";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate()

  const loginClickHandler = () =>{
    navigate("/login");
  }
  const registerClickHandler = () =>{
    navigate("/register");
  }



  return (
    <header className="flex justify-between bg-gradient-to-r from-backgroundGradient1 to-backgroundGradient2 w-full p-2 text-xl text-slate-800 h-50 pr-5 pl-5">
      <div className="">
        <img src={logo} className="object-cover w-56 h-max" alt="logo" />
      </div>
      {!props.isLoggedIn && (
        <section className="flex justify-evenly items-center ">
          <ButtonNavbar onClick={loginClickHandler}>Login</ButtonNavbar>
          <ButtonNavbar onClick={registerClickHandler}>Register</ButtonNavbar>
        </section>
      )}
      {props.isLoggedIn && (
        <section className="flex justify-evenly items-center ">
          <ButtonNavbar>Profil</ButtonNavbar>
          <ButtonNavbar onClick={props.onLogout}>Wyloguj</ButtonNavbar>
        </section>
      )}
    </header>
  );
};

export default Navbar;
 