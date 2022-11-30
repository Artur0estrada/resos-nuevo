import {useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Axios from "axios";

const Citaform = () =>{

    const[nombreReg, setNombreReg] = useState("");
    const[celularReg, setCelularReg] = useState("");
    const[tipo_instrumentoReg, setTipo_instrumentoReg] = useState("");
    const[tipo_servicioReg, setTipo_servicioReg] = useState("");
    const[user_idReg, setUser_idReg] = useState("");

    useEffect(()=>{
        Axios.get("http://localhost:3001/sesion").then((response) => {
            if(response.data.loggedIn = true){
                setUser_idReg(response.data.user[0].idusuario);
            }
        });
    }, []);

    const registerer = () => {
        Axios.post('http://localhost:3001/citas', {
            userid: user_idReg,
            nombre_ct: nombreReg,
            celular_ct: celularReg,
            tipo_instrumento: Tipo_Instrumentos,
            tipo_servicio: Servicios,
            fecha: startDate,
        }).then((response) => {
            console.log("AAAA SI JALO");
        });
    };



const { register, handleSubmit, watch } = useForm();

const onSubmit =(data) =>{
    console.log(data)
}

const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
);
const Instrumentos = watch('Instrumento');
const Tipo_Instrumentos = watch('Tipo_instrumento');
const Servicios = watch('Servicio');

    return <div>
        <form>
            <div>
                <input
                    className='textos'
                    type={"text"}
                    value={nombreReg}
                    placeholder={'Nombre'}
                    onChange={(e) => {
                        setNombreReg(e.target.value);
                    }}
                    required={true}
                />

            </div>
            <div>
                <input
                    className='textos'
                    type={"text"}
                    placeholder={'Telefono'}
                    onChange={(e) => {
                        setCelularReg(e.target.value);
                    }}
                    required={true}
                />
            </div>
            <div>
                <select
                    class={'textos'}
                    name={'Instrumento'}
                    {...register('Instrumento')}
                    required={true}>
                    <option value={"Bajo Eléctrico"}>Bajo Eléctrico</option>
                    <option value={"Guitarra Electrica"}>Guitarra Electrica</option>
                    <option value={"Guitarra Acustica/Electroacustica"}>Guitarra Acustica/Electroacustica</option>
                    <option value={"Instrumento Regional"}>Instrumento Regional</option>
                </select>
            </div>
            {Instrumentos === 'Bajo Eléctrico' && (
                <div>
                    <select class={'textos'}
                            name={'Tipo_instrumento'}
                            {...register('Tipo_instrumento')}>
                        <option value={1}>Bajo de 4 cuerdas</option>
                        <option value={2}>Bajo de 5 cuerdas</option>
                        <option value={3}>Bajo de 6 cuerdas</option>
                    </select>
                </div>
            )}
            {Instrumentos === 'Guitarra Electrica' && (
                <div>
                    <select class={'textos'}
                        name={'Tipo_instrumento'}
                        {...register('Tipo_instrumento')}>
                        <option value={4}>Puente Fijo</option>
                        <option value={5}>Puente Tremolo</option>
                        <option value={6}>Floyd Rose</option>
                    </select>
                </div>
            )}
            {Instrumentos === 'Guitarra Acustica/Electroacustica' && (
                <div>
                    <select class={'textos'}
                            name={'Tipo_instrumento'}
                            {...register('Tipo_instrumento')}>
                        <option value={7}>Acustica</option>
                        <option value={8}>Electroacustica</option>
                        <option value={9}>Clasica</option>
                    </select>
                </div>
            )}
            {Instrumentos === 'Instrumento Regional' && (
                <div>
                    <select class={'textos'}
                            name={'Tipo_instrumento'}
                            {...register('Tipo_instrumento')}>
                        <option value={10}>Guitarra de 12 cuerdas</option>
                        <option value={11}>Bajo Quinto</option>
                        <option value={12}>Bajo Sexto</option>
                    </select>
                </div>
            )}
            <div>
                <select
                    class = "textos"
                    name={'Servicio'}
                    {...register('Servicio')}
                    placeholder={'Servicios'}>
                    <option value={"Calibracion"}>Calibración</option>
                    <option value={"Reparacion"}>Reparacion</option>
                    <option value={"Electronica"}>Electrónica</option>
                    <option value={"Nivelado"}>Nivelación de trastes</option>
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
                <button onClick={registerer} type={'submit'} >Enviar</button>
            </div>

        </form>
    </div>
}






export default Citaform;