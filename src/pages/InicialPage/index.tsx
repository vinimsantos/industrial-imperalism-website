import React from 'react';
import { Link } from 'react-router-dom';
import playButton from './../../assets/botaoplaynow.png'
import { BackgroundImage, PlayNowButton } from './styles';

export const Inicialpage = () => {
        return (
          <BackgroundImage>
              <Link to ='/home'>
                <PlayNowButton src={playButton}/>
              </Link>
            </BackgroundImage>
          );
}