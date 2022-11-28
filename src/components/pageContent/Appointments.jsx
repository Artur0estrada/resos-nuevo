import React from "react"
import AppointmentsForm from "../home/formularios/AppointmentsForm";





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
                                <h2>Historial</h2>
                            </div>
                            <body>
                            <div>
                                <AppointmentsForm />
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
