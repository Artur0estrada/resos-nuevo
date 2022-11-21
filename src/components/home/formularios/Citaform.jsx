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
                        <option value={"Guitarra Acústica/Electroacustica"}>Guitarra acústica o electroacustica</option>
                        <option value={"Bajo Eléctrico 4 cuerdas"}>Bajo de 4 cuerdas</option>
                        <option value={"Bajo Eléctrico 5 cuerdas"}>Bajo de 5 cuerdas</option>
                        <option value={"Bajo Eléctrico 6 cuerdas"}>Bajo de 6 cuerdas</option>
                        <option value={"Guitarra electrica"}>Guitarra Electrica</option>
                        <option value={"Guitarra electrica Floyd Rose"}>Guitarra Electrica Floyd Rose</option>
                        <option value={"Guitarra de 12 cuerdas"}>Guitarra de 12 cuerdas</option>
                        <option value={"Bajo Quinto"}>Bajo Quinto</option>
                        <option value={"Bajo sexto"}>Bajo Sexto</option>
                    </select>
            </div>
            <div>
                <select class = "textos" placeholder={'Servicios'} {...register('Servicio')}>
                    <option value={"Calibración"}>Calibración</option>
                    <option value={"Reparacion"}>Reparacion</option>
                    <option value={"Electrónica"}>Electrónica</option>
                    <option value={"Nivelación de trastes"}>Nivelación de trastes</option>
                </select>
            </div>
            <div className={'boton'}>
                <button type={'submit'} >Enviar</button>
            </div>

        </form>
    </div>
}






export default Citaform;