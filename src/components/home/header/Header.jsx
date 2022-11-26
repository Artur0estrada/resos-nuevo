import React, {useEffect, useState} from "react"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import WorkIcon from "@mui/icons-material/Work"
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"
import Axios, * as others from 'axios';



const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 180)
  })

  Axios.defaults.withCredentials = true;

  const [idtipo_usuario, setRole] = useState("");
  useEffect(()=>{
    Axios.get("http://localhost:3001/sesion").then((response) => {
      if(response.data.loggedIn = true){
        setRole(response.data.user[0].idtipo_usuario);
      }
    });
  },[]);

  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
            <img src='/resos.png' height={60} width={80} alt='' />
          </div>
          <div className='nav'>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/citas'>Citas</Link>
              </li>
              <li>
                {idtipo_usuario == "1" &&(
                    <Link to='/sesion'>Cerrar Sesion</Link>
                )}
                {idtipo_usuario != "1" &&(
                    <Link to='/sesion'>Iniciar Sesion</Link>
                )}
              </li>
              <li>
                {idtipo_usuario != "1" &&(
                    <Link to='/register'>Registrarse</Link>
                )}
              </li>
              <li className='icon'>
                <SearchOutlinedIcon className='HeaderIcon' />
                <WorkIcon className='HeaderIcon' />
                <GridViewTwoToneIcon className='HeaderIcon' />
              </li>
            </ul>
          </div>
          <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
