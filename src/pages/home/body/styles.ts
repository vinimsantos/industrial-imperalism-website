import styled from "styled-components";
import HomeBackground from './../../../assets/cenario2.png';

export const BackgroundHomeImage = styled.div`
background-image: url(${HomeBackground});
background-size: cover;
width: 100%;
height: 100%;
background-repeat: no-repeat;
position: absolute;
background-position: center;
`
export const ContainerText = styled.div`
margin-left: 19.5%;
padding-top: 50px;
width: 40%;
height: 50%;
color: white;
font-size: 80px;
font-weight: bold;
`
export const RegisterNowButton = styled.img`
cursor: pointer;
width: auto;
height: 100px;
margin-top: 50px;
&:hover {
    opacity: 0.8;
    transition: 0.3s;
}
`