import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import Axios, * as others from 'axios';

const Sesionform = () =>{

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const[loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post('http://localhost:3001/sesion', {
            username: username,
            password: password,
        }).then((response) => {

            if(response.data.message){
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].username)
            }

        });
    };

    useEffect(()=>{
        Axios.get("http://localhost:3001/sesion").then((response) => {
          if(response.data.loggedIn = true){
              setLoginStatus(response.data.user[0].username);
          }
        });
    }, []);


const { register, handleSubmit } = useForm();

    return <div>
        <form>
            <div className='inputs'>
                <div>
                    <input
                        className='textos'
                        type={"text"}
                        placeholder={'Usuario'}
                        name={""}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <input
                        className='textos'
                        type={"password"}
                        placeholder={'Contraseña'}
                        name={""}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />

                </div>
                <div className='olvidar'>
                <span>
                    <a href='#'>Olvidaste la contraseña?</a>
                </span>
                </div>
            </div>

        </form>
        <div className='boton'>
            <button onClick={login}>Iniciar Sesion</button>
        </div>
        <h1>{loginStatus}</h1>
    </div>
}






export default Sesionform;