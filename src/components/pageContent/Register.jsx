import React from "react"

import Registerform from "../home/formularios/Registerform";
const Sesion = () => {

    return (
        <>

            <section className='citasform'>
                <div>
                    <div className='contenedorsesion'>
                        <div class='bienvenida'>
                            <h1>Bienvenido</h1>
                        </div>
                        <div className='forminit'>
                            <div className='cabeza'>
                                <h2>Registrate</h2>
                            </div>
                            <body>
                            <div>
                                <Registerform />
                            </div>

                            </body>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sesion