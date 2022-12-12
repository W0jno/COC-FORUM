import ButtonNavbar from "./ButtonNavbar"
import logo from "../../assets/logo-navbar.png"
import { useNavigate } from "react-router-dom"

const Navbar = (props) => {
  const navigate = useNavigate()

  const loginClickHandler = () => {
    navigate("/login")
  }
  const registerClickHandler = () => {
    navigate("/register")
  }

  const homeClickHandler = () => {
    navigate("/")
  }
  const profileClickHandler = () => {
    navigate("/profile")
  }
  const addPostHandler = () => {
    navigate("/add_post")
  }

  return (
    <header className='flex justify-between bg-gradient-to-r from-backgroundGradient1 to-backgroundGradient2 w-full p-2 text-xl text-slate-800 h-50 pr-5 pl-5 mb-10'>
      <div onClick={homeClickHandler}>
        <img src={logo} className='object-cover w-56 h-max' alt='logo' />
      </div>
      {!props.isLoggedIn && (
        <section className='flex justify-evenly items-center '>
          <ButtonNavbar onClick={loginClickHandler}>Login</ButtonNavbar>
          <ButtonNavbar onClick={registerClickHandler}>Register</ButtonNavbar>
        </section>
      )}
      {props.isLoggedIn && (
        <section className='flex justify-evenly items-center '>
          <ButtonNavbar onClick={profileClickHandler}>Profil</ButtonNavbar>
          <ButtonNavbar onClick={props.onLogout}>Logout</ButtonNavbar>
          <ButtonNavbar onClick={addPostHandler}>Add Post</ButtonNavbar>
        </section>
      )}
    </header>
  )
}

export default Navbar
