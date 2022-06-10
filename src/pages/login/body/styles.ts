import styled from 'styled-components'
import Container from '../../../assets/container.png'

export const MainLoginContainer = styled.div`
height: 543px;
width: 812px;
background-image: url(${Container});
background-size: 100%;
background-repeat: no-repeat;
text-align: center;
padding-top: 90px;
align-content: center;
margin: auto;
`

export const LogoLoginpage = styled.img`
height: 120px;
width: 120px;
`
export const Space = styled.hr`
border: 0;
`
export const InputContainer = styled.input`
border-radius: 10px;
border: 2px solid white;
height: 30px;
width: 300px;
`

export const LogButton = styled.input`
background-color: brown;
border-radius: 15px;
height: 60px;
width: 140px;
`

export const ErrorMessage = styled.div`
margin: 10px;
background-color: #FFCACA;
color: black;
border: 2px solid red;
`