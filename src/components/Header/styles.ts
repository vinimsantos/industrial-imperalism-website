import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;

export const ImageLogo = styled.img`
margin-left: 60px;
margin-top: 10px;
cursor: 'pointer';
width: 100px;
height: 100px;
justify-content: 'center';
position: relative;
&:hover {
    opacity: 0.8;
    transition: 0.3s;
}
`;

export const LoginButton = styled.button`
background-color: brown;
border-radius: 20px;
text-align: center;
color: white;
border-color: brown;
font-size: 15px;
padding: 7px;
cursor: pointer;
margin-left: 600px;
&:hover {
    opacity: 0.8;
    transition: 0.3s;
}
`;

export const SignInButton = styled.button`
background-color: transparent;
border-radius: 20px;
text-align: center;
color: white;
border-color: brown;
font-size: 15px;
padding: 7px;
cursor: pointer;
margin-left: 10px;
&:hover {
    opacity: 0.8;
    transition: 0.3s;
}
`;

export const HeaderMenu = styled.ul`
list-style-type: none;
display: flex;
`

export const MenuOption = styled.li`
cursor: pointer;
display: inline;
color: white;
font-size: 20px;
font-weight: bold;
margin-left: 90px;
&:hover {
    opacity: 0.7;
    transition: 0.3s;
}
`

export const LinkTo = styled(Link)`
text-decoration: none;
color: #fff;
`
