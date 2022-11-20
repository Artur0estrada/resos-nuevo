import {useForm} from "react-hook-form";

const Citaform = () =>{

const { register, handleSubmit } = useForm();

    return <div>
        Formulario
        <form>
            <div>
                <label>Nombre</label>
                    <input class = "textos" type={"text"} name={""}/>

            </div>
            <div>
                <label>Telefono</label>
                    <input class = "textos" type={"text"} name={""}/>

            </div>
            <div>
                <label>Direccion</label>
                    <input class = "textos" type={"text"} name={""}/>

            </div>
            <div>
                <label>Instrumento</label>
                    <select class = "textos">
                        <option value={"guitarra"}>Guitarra</option>
                        <option value={"bajo"}>Bajo</option>
                        <option value={"electrica"}>Guitarra Electrica</option>
                    </select>
            </div>
            <div>
                <label>Servicio</label>
                <select class = "textos">
                    <option value={"afinacion"}>afinacion</option>
                    <option value={"reparacion"}>reparacion</option>
                    <option value={"diagnostico"}>diagnostico</option>
                </select>
            </div>

        </form>
    </div>
}






export default Citaform;