import {useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const Citaform = () =>{

const { register, handleSubmit, watch } = useForm();

const onSubmit =(data) =>{
    console.log(data)
}

const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
);
const Instrumentos = watch('Instrumento');

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
                <select class={'textos'} name={'Instrumentos'} {...register('Instrumento')}>
                    <option {...register('Bajos')} value={"Bajo Eléctrico"}>Bajo Eléctrico</option>
                    <option value={"Guitarra Electrica"}>Guitarra Electrica</option>
                    <option value={"Guitarra Acustica/Electroacustica"}>Guitarra Acustica/Electroacustica</option>
                    <option value={"Instrumento Regional"}>Instrumento Regional</option>
                </select>
            </div>
            {Instrumentos === 'Bajo Eléctrico' && (
                <div>
                    <select class={'textos'} >
                        <option value={"Bajo Eléctrico 4 cuerdas"}>Bajo de 4 cuerdas</option>
                        <option value={"Bajo Eléctrico 5 cuerdas"}>Bajo de 5 cuerdas</option>
                        <option value={"Bajo Eléctrico 6 cuerdas"}>Bajo de 6 cuerdas</option>
                    </select>
                </div>
            )}
            {Instrumentos === 'Guitarra Electrica' && (
                <div>
                    <select class={'textos'} >
                        <option value={"Puente Fijo"}>Puente Fijo</option>
                        <option value={"Puente Tremono"}>Puente Tremolo</option>
                        <option value={"Floyd Rose"}>Floyd Rose</option>
                    </select>
                </div>
            )}
            {Instrumentos === 'Guitarra Acustica/Electroacustica' && (
                <div>
                    <select class={'textos'} >
                        <option value={"Acustica"}>Acustica</option>
                        <option value={"Electroacustica"}>Electroacustica</option>
                        <option value={"Clasica"}>Clasica</option>
                    </select>
                </div>
            )}
            {Instrumentos === 'Instrumento Regional' && (
                <div>
                    <select class={'textos'} >
                        <option value={"Guitarra de 12 cuerdas"}>Guitarra de 12 cuerdas</option>
                        <option value={"Bajo Quinto"}>Bajo Quinto</option>
                        <option value={"Bajo sexto"}>Bajo Sexto</option>
                    </select>
                </div>
            )}
            <div>
                <select class = "textos" placeholder={'Servicios'} {...register('Servicio')}>
                    <option value={"Calibración"}>Calibración</option>
                    <option value={"Reparacion"}>Reparacion</option>
                    <option value={"Electrónica"}>Electrónica</option>
                    <option value={"Nivelación de trastes"}>Nivelación de trastes</option>
                </select>
            </div>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                includeTimes={[
                    setHours(setMinutes(new Date(), 0), 17),
                    setHours(setMinutes(new Date(), 30), 18),
                    setHours(setMinutes(new Date(), 30), 19),
                    setHours(setMinutes(new Date(), 30), 17),
                ]}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <div className={'boton'}>
                <button type={'submit'} >Enviar</button>
            </div>

        </form>
    </div>
}






export default Citaform;