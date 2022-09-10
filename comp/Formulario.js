import styles from './Style.module.css'
import {useState} from 'react'
function Formulario(){
    function UsuarioCadastrado(e){
        e.preventDefault()
        console.log(`O usuario cadastrado foi o: ${name}, e a senha e a confirmação de senha foi: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return(
        <>
            <div className={styles.container}>
                <form onSubmit={UsuarioCadastrado}>
                    <div className={styles.fullbox}>
                        <label htmlFor='User'>User:</label>
                        <input type='text' name='User' placeholder='Digite o seu Usuario...' onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className={styles.halfbox}>
                        <label htmlFor='Password'>Password:</label>
                        <input type='password' id='password' name='password' placeholder='Digite a sua senha...' onChange={(e) => setPassword (e.target.value)}></input>
                    </div>
                    <div className={styles.halfbox}>
                        <label htmlFor='ConfirmPassword'>Confirm Password:</label>
                        <input type='password' name='password' id='Password' placeholder='Confirme a sua senha...' onChange={(e) => setPassword (e.target.value)}></input>
                    </div>
                    <div className={styles.btn}>
                        <button>Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Formulario;