import React from "react"

const About = () => {
  const data = [
    {
      title: "Quienes somos y a que nos dedicamos",
      desc1: "Re Sostenido es una empresa de mantenimiento y reparación de instrumentos musicales, donde se busca satisfacer las necesidades del cliente y que reconozcan nuestra empresa como un lugar de confianza. Nos distinguimos por realizar las entregas en el menor tiempo posible, a un precio justo y con un trabajo de calidad.",
      desc2: "Garantizamos la calidad y rapidez de servicio dedicándonos al mantenimiento, reparación y modificación de instrumentos musicales mejorando la experiencia que puedan tener nuestros clientes con la música.",
      desc3: "Los servicios que se ofrecen son: calibración, reparación de electrónica, cambio de cuerdas, reparación de headstock, reparación de puente, servicio de repintado, cuerdas, soportes de uso rudo.",
      cover: "./assets/guitarra1.jpg",
    },
  ]
  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>Sobre nosotros:</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>

                </div>
                <div className='right'>
                  <div className='img'>
                    <img src={value.cover} alt='' height={650} />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
