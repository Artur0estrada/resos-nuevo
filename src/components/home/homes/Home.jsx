import React from "react"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img src='./guitarra.png' alt='' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              RE SOSTENIDO
            </h1>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
            </div>
            <p>Si tu instrumento presenta algun problema o simplemente te gustaría dejarlo en las mejores condiciones posibles
              tralo con nosotros y con gusto te ayudaremos a darle nueva vida a tu instrumento!</p>
            <button className='primary-btn'>Agenda una cita!</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
