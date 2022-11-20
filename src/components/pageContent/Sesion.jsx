import React from "react"

import Sesionform from "../home/formularios/Sesionform";
const Sesion = () => {

    return (
        <>

            <section className='citas'>
                <div>
                    <div className='contenedorsesion'>
                        <div class='bienvenida'>
                            <h1>Bienvenido</h1>
                        </div>
                        <div className='forminit'>
                            <div className='cabeza'>
                                <h2>Login</h2>
                                <p>No tienes una cuenta? <a href={""} >Crea una</a> </p>
                            </div>
                            <body>

                            <text>Hola</text>
                            <div>
                                <Sesionform />
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