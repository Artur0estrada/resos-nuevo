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


  const [idtipo_usuario, setRole] = useState("2");
  const [userid, setUserid] = useState("");
  const [nombre, setNombre] = useState("");

  const cerrar_sesion = event => {
    console.log('Link clicked');
    setRole("2");
    setUserid("");
    setNombre("");

    // 👇️ refers to the link element
    console.log(event.currentTarget);
  };

  useEffect(()=>{
    Axios.get("http://localhost:3001/sesion").then((response) => {
      if(response.data.loggedIn = true){
        setRole(response.data.user[0].idtipo_usuario);
        setUserid(response.data.user[0].userid);
        setNombre(response.data.user[0].nombre);
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
                <Link to='/citas'>Agendar cita</Link>
              </li>
              <li>
                {idtipo_usuario == "0" &&(
                    <Link to='/appointments'>{nombre}</Link>
                )}
                {idtipo_usuario == "1" &&(
                    <Link to='/orders'>{nombre}</Link>
                )}
              </li>
              <li>
                {idtipo_usuario == "0" &&(
                    <Link to='/' onClick={cerrar_sesion}>Cerrar Sesion</Link>
                )}
                {idtipo_usuario == "1" &&(
                    <Link to='/' onClick={cerrar_sesion}>Cerrar Sesion</Link>
                )}
                {idtipo_usuario == "2" &&(
                    <Link to='/sesion'>Iniciar Sesion</Link>
                )}
              </li>
              <li>
                {idtipo_usuario == "2" &&(
                    <Link to='/register'>Registrarse</Link>
                )}
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
