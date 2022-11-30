import React from "react"
import Citaform from "../home/formularios/Citaform";
import Sesionform from "../home/formularios/Sesionform";
const Citas = () => {

    return (
        <>

            <section className='citas2'>
                <div>
                    <div className='contenedorsesion'>
                        <div className='bienvenida'>
                            <h1>Re Sostenido.</h1>
                        </div>
                        <div className='forminit'>
                            <div className='cabeza'>
                                <h2>Agenda tu cita</h2>
                            </div>
                            <body>
                            <div>
                                <Citaform/>
                            </div>

                            </body>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Citas
