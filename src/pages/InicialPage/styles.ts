import styled from "styled-components";
import backgroundImage from './../../assets/abertura.png';

export const BackgroundImage = styled.div`
background-image: url(${backgroundImage});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 100%;
background-position: center;
position: absolute;
`

export const PlayNowButton = styled.img`
display: flex;
position: absolute;
cursor: pointer;
width: auto; 
height: 80px;
left: 610px;
top: 540px;
right: 0px;
bottom: 0px;
&:hover {
    opacity: 0.8;
    transition: 0.3s;
}
`;

