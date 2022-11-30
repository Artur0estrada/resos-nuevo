import React from "react"
import OrdersForm from "../home/formularios/OrdersForm";





const Orders = () => {

    return (
        <>

            <section className='citas2'>
                <div>
                    <div className='contenedorsesion'>
                        <div className='bienvenida'>
                            <h1>D#.</h1>
                        </div>
                        <div className='forminit'>
                            <div className='cabeza'>
                                <h2>Historial de citas:</h2>
                            </div>
                            <body>
                            <div>
                                <OrdersForm />
                            </div>

                            </body>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Orders
