import { Link } from 'react-router-dom'
import RegisterNow from '../../../assets/registernowbutton.png'
import { ContainerText, RegisterNowButton } from './styles'

export const BodyHome = () => {
    return (
            <ContainerText>
                The next evolution of Industrial Imperalism
                <Link to ='/signup'>
                        <RegisterNowButton src={RegisterNow}/>
                </Link>
            </ContainerText>
    )
}