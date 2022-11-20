import React from "react"
import Citaform from "../home/formularios/Citaform";
const Citas = () => {

    return (
        <>

            <section className='citas'>
                <div className='right topMarign'>
                    <h1>Agendar cita</h1>
                        <body>
                            <div>
                                <Citaform />
                            </div>
                        </body>
                </div>
            </section>
        </>
    )
}

export default Citas
