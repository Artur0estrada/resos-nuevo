import React from "react"

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Prevención",
      desc: "Si tu instrumento aun no presenta problemas no esperes a que lo haga, traelo por un servicio para prevenir cualquier problema antes de que suceda.",
    },
    {
      id: "02",
      heading: "Calibración",
      desc: "Si tu instrumento ya comienza a mostrar problemas leves o moderados una calibración dejará tu instrumento de nuevo en forma y listo para tocar.",
    },
    {
      id: "03",
      heading: "Reparación",
      desc: "Si tu instrumento ya presenta un daño considerable contactanos para revisar el caso y ver que opciones podemos ofrecerte.",
    },
  ]
  return (
    <>
      <section className='Branding'>
        <div className='container grid'>
          {data.map((value) => {
            return (
              <div className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para'>
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding
