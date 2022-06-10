import backgroundHomeImage from './assets/cenario2.png'
import {Header} from './components/Header'
import {BodyHome} from './pages/home/body'
import backgroundImage1 from './assets/cenario1.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicialpage } from './pages/InicialPage';
import { BodySignIn } from './pages/login/body';
import { BodyDonwload } from './pages/donwload/body';
import { BodySignUp } from './pages/signup/body';
import { BodyAbout } from './pages/about/body';
import { BackgroundHomeImage } from './pages/home/body/styles';
import { BackgroundAbout } from './pages/about/body/styles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicialpage/>}/>
        <Route path="home" element={
                <BackgroundHomeImage>
                  <Header/>
                  <BodyHome/>
                </BackgroundHomeImage>}/>

        <Route path="about" element={
          <BackgroundAbout>
                    <Header/>
                    <BodyAbout/>
          </BackgroundAbout>}/>
          
        <Route path="login" element={
          <BackgroundAbout>
                  <Header/>
                  <BodySignIn/>
          </BackgroundAbout>}/>

        <Route path="signup" element={
        <BackgroundHomeImage>
                <Header/>
                <BodySignUp/>
        </BackgroundHomeImage>}/>

        <Route path="donwload" element={
                <BackgroundHomeImage>
                  <Header/>
                  <BodyDonwload/>
                </BackgroundHomeImage>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
