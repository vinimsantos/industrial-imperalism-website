import { useState } from 'react';
import { Link } from 'react-router-dom'
import { InputContainer, LogoLoginpage, MainLoginContainer, Space, ErrorMessage } from './styles'
import UseApi from './../../../components/helper/IndustrialAPI'

export const BodySignIn = () => {

    const api = UseApi();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setDisabled(true);
        console.log("submit", {username, password});
        const json = await api.login(username, password);

    };

    return (
        <MainLoginContainer>
            <LogoLoginpage src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'/>
                <Space/>
                <form onSubmit={handleSubmit}>
                    <InputContainer 
                        type="email" 
                        placeholder='Username...' 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)}
                        disabled={disabled}
                    />
                    <Space/>
                    <Space/>
                    <InputContainer 
                        type="password" 
                        placeholder='Password...' 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                        disabled={disabled}
                    />
                    <Space/>
                    <Space/>
                <button disabled={disabled} style={{backgroundColor: 'brown', borderRadius: 15, height: 60, width: 140}}>
                    <b>Login</b>
                </button>
                </form>
                <Space/>
                <small>Dont have an account yet? <Link to={'/signup'}>Sign Up</Link></small>
        </MainLoginContainer>
    )
}