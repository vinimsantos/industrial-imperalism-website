import { Link } from 'react-router-dom'
import Container from '../../../assets/container.png'
import { InputContainer, LogoLoginpage, Space } from '../../login/body/styles'
import { MainSignUpContainer } from './styles'

export const BodySignUp = () => {
    return (
        <MainSignUpContainer>
            <LogoLoginpage src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'/>
            <Space/>
            <form>
                <InputContainer type="text" placeholder='Username...'/>
                <Space/>
                <InputContainer type="email" placeholder='Email...'/>
                <Space/>
                <InputContainer type="password" placeholder='Password...'/>
                <Space/>
                <InputContainer type="password" placeholder='Confirm Password...'/>
                <Space/>
                <button style={{backgroundColor: 'brown', borderRadius: 15, height: 60, width: 140}}>
                    <b>Register</b>
                </button>
                <Space/>
                <small>Already have an account? <Link to={'/login'}>Login</Link></small>
            </form>
        </MainSignUpContainer>
    )
}