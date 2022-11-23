import {useForm} from "react-hook-form";
import {Axios} from "axios";
import {useState} from "react";

const Registerform = () =>{

    const[usernameReg, setUsernameReg] = useState("");
    const[passwordReg, setPasswordReg] = useState("");

    const registerer = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        })
    }

    const { register1, handleSubmit } = useForm();

    return <div>
        <form>
            <div className='inputs'>
                <div>
                    <input
                        className='textos'
                        type={"text"}
                        placeholder={'Nombre de usuario'}
                        name={""}
                        onChange={(e) => {
                          setUsernameReg(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <input
                        className='textos'
                        type={"text"}
                        placeholder={'Nombre'}
                        name={""}
                    />
                </div>
                <div>
                    <input
                        className='textos'
                        type={"text"}
                        placeholder={'Apellido Paterno'}
                        name={""}
                    />
                </div>
                <div>
                    <input
                        className='textos'
                        type={"text"}
                        placeholder={'Apellido Materno'}
                        name={""}
                    />
                </div>
                <div>
                    <input
                        className='textos'
                        type={"text"}
                        placeholder={'Celular'}
                        name={""}
                    />
                </div>
                <div>
                    <input
                        className='textos'
                        type={"text"}
                        placeholder={'Correo'}
                        name={""}
                    />
                </div>
                <div>
                    <input
                        className='textos'
                        type={"password"}
                        placeholder={'Contraseña'}
                        name={""}
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
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
                <button type={'submit'} onClick={registerer}>Registrate</button>
            </div>
        </form>
    </div>
}







export default Registerform;