import {useForm} from "react-hook-form";

const Citaform = () =>{

const { register, handleSubmit } = useForm();

const onSubmit =(data) =>{
    console.log(data)
}


    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                    <input class = "textos" placeholder={'Nombre'} type={"text"} {...register('Nombre')}/>

            </div>
            <div>
                    <input class = "textos" type={"text"} placeholder={'Telefono'} {...register('Telefono')}/>

            </div>
            <div>
                    <input class = "textos" type={"text"}  placeholder={'Direccion'} {...register('Direccion')}/>

            </div>
            <div>
                    <select class = "textos" placeholder={'Instrumento'} {...register('Instrumento')}>
                        <option value={"guitarra"}>Guitarra</option>
                        <option value={"bajo"}>Bajo</option>
                        <option value={"electrica"}>Guitarra Electrica</option>
                    </select>
            </div>
            <div>
                <select class = "textos" placeholder={'Servicios'} {...register('Servicio')}>
                    <option value={"afinacion"}>afinacion</option>
                    <option value={"reparacion"}>reparacion</option>
                    <option value={"diagnostico"}>diagnostico</option>
                </select>
            </div>
            <div className={'boton'}>
                <button type={'submit'} >Enviar</button>
            </div>

        </form>
    </div>
}






export default Citaform;