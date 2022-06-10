import styled from "styled-components";
import containerImage from './../../../assets/container.png'
import imageAbout from './../../../assets/cenario1.png'

export const MainContainerAbout = styled.div`
height: 593px;
width: 812px;
background-image: url(${containerImage});
background-size: 100%;
background-repeat: no-repeat;
text-align: center;
padding-top: 40px;
align-content: center;
margin: auto;
`
export const AboutTextContainer = styled.div`
margin-left: 75px;
margin-right: 75px;
text-align: justify;
`

export const BackgroundAbout = styled.div`
background-image: url(${imageAbout});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 100%;
background-position: center;
position: absolute;
`