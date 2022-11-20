import {useForm} from "react-hook-form";

const Citaform = () =>{

const { register, handleSubmit } = useForm();

    return <div>
        <form>
            <div className='inputs'>
                <div>
                    <input className='textos' type={"text"} placeholder={'Usuario'} name={""}/>
                </div>
                <div>
                    <input className='textos' type={"password"}  placeholder={'Contraseña'} name={""}/>

                </div>
                <div className='olvidar'>
                <span>
                    <a href='#'>Olvidaste la contraseña?</a>
                </span>
                </div>
            </div>
            <div className='boton'>
                <button type={'submit'}>Iniciar Sesion</button>
            </div>
        </form>
    </div>
}






export default Citaform;