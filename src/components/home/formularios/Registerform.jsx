import {useForm} from "react-hook-form";
import Axios, * as others from 'axios';
import {useState} from "react";

const Registerform = () =>{

    const[usernameReg, setUsernameReg] = useState("");
    const[nombreReg, setNombreReg] = useState("");
    const[a_paternoReg, setA_paternoReg] = useState("");
    const[a_maternoReg, setA_maternoReg] = useState("");
    const[celularReg, setCelularReg] = useState("");
    const[emailReg, setEmailReg] = useState("");
    const[passwordReg, setPasswordReg] = useState("");

    const registerer = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg,
            nombre: nombreReg,
            a_paterno: a_paternoReg,
            a_materno: a_maternoReg,
            celular: celularReg,
            email: emailReg,
        }).then((response) => {
            console.log("AAAA SI JALO");
        });
    };

    const { register1, handleSubmit } = useForm();

    return (<div>
            <form>
                <div className='inputs'>
                    <div>
                        <input
                            className='textos'
                            type={"text"}
                            placeholder={'Nombre de usuario'}
                            onChange={(e) => {
                                setUsernameReg(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className='textos'
                            type={"text"}
                            placeholder={'Nombre'}
                            name={""}
                            onChange={(e) => {
                                setNombreReg(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className='textos'
                            type={"text"}
                            placeholder={'Apellido Paterno'}
                            name={""}
                            onChange={(e) => {
                                setA_paternoReg(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className='textos'
                            type={"text"}
                            placeholder={'Apellido Materno'}
                            name={""}
                            onChange={(e) => {
                                setA_maternoReg(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className='textos'
                            type={"text"}
                            placeholder={'Celular'}
                            name={""}
                            onChange={(e) => {
                                setCelularReg(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className='textos'
                            type={"text"}
                            placeholder={'Correo'}
                            name={""}
                            onChange={(e) => {
                                setEmailReg(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className='textos'
                            type={"password"}
                            placeholder={'Contraseña'}
                            onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className='textos'
                            type={"password"}
                            placeholder={'Repetir Contraseña'}
                            name={""}
                        />
                    </div>
                </div>
                <div className='boton'>
                    <button onClick={registerer}>Registrate</button>
                </div>
            </form>
        </div>
    );
}







export default Registerform;