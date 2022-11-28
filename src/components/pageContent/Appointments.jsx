import React from "react"
import AppointmentsForm from "../home/formularios/AppointmentsForm";
import Sesionform from "../home/formularios/Sesionform";
const Appointments = () => {

    return (
        <>

            <section className='citas2'>
                <div>
                    <div className='contenedorsesion'>
                        <div className='bienvenida'>
                            <h1>Eat. Shit. Die.</h1>
                        </div>
                        <div className='forminit'>
                            <div className='cabeza'>
                                <h2>Agenda tu cita</h2>
                            </div>
                            <body>
                            <div>
                                <AppointmentsForm/>
                            </div>

                            </body>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Appointments
