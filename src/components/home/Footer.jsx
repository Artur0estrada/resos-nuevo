import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src='./resos.png'  height={150} width={180} alt='' />
            <p>Re Sostenido es una empresa de mantenimiento y reparación de instrumentos
              musicales, donde se busca satisfacer las necesidades del cliente y que reconozcan
              nuestra empresa como un lugar de confianza. Nos distinguimos por realizar las
              entregas en el menor tiempo posible, a un precio justo y con un trabajo de calidad.</p>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>Links rapidos</h2>
            <ul>
              <li>Inicio</li>
              <li>Sobre Nosotros</li>
              <li>Contactanos</li>
              <li>Crear cita</li>
            </ul>
          </div>

          <div className='box'>
            <h2>Posts Recientes</h2>
            <div className='text'>
              <p>Aún no hay entradas recientes</p>
              <span> 20 Nov 2022</span>
            </div>
            <div className='text'>
              <p>Aún no hay entradas recientes</p>
              <span> 20 Nov 2022</span>
            </div>
            <div className='text'>
              <p>Aún no hay entradas recientes</p>
              <span> 20 Nov 2022</span>
            </div>
          </div>

          <div className='box'>
            <h2>Contactanos:</h2>
            <p>Nos ubicamos al norte de la ciudad, haz tu cita ahora.</p>
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>Dirección: San Raymundo #64, Fraccionamiento Villa Verde, Hermosillo. Sonora.</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Telefono: 6623511195</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>Email: resostenidomods@gmail.com</label>
            </div>
          </div>
        </div>
        <div className='legal container'>
          <p>Copyright @2022. All rights reserved.</p>
          <label>
            Design & Developed by <span>Adrián Vargas, Sofia García, Yubitza Badachí, Arturo Estrada </span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
