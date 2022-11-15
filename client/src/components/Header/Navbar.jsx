import ButtonNavbar from "./ButtonNavbar";
import logo from "../../assets/logo-navbar.png";

const Navbar = () => {
  return (
    <header className="flex justify-between bg-gradient-to-r from-backgroundGradient1 to-backgroundGradient2 w-full p-2 text-xl text-slate-800 h-50 pr-5 pl-5">
      <div className="">
        <img src={logo} className="object-cover w-56 h-max" alt="logo" />
      </div>
      <section className="flex justify-evenly items-center ">
        <ButtonNavbar>Login</ButtonNavbar>
        <ButtonNavbar>Register</ButtonNavbar>
      </section>
    </header>
  );
};

export default Navbar;
 