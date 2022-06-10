import { useState } from 'react';
import { DonwloadIcon, MainDownloadContainer } from './styles'

export const BodyDonwload = () => {

  const urlToDownload = "https://speed.hetzner.de/100MB.bin";
  const [download, setDownload] = useState("");

    return (
          <MainDownloadContainer>
            <h1>Official Industrial Imperalism Client</h1>
            <button onClick={() => setDownload(urlToDownload)}>
              <DonwloadIcon src='https://cdn-icons-png.flaticon.com/512/0/532.png'/>
            </button>
            { download && <iframe src={download} style={{display: 'none'}}></iframe> }
            <h1>Donwload Windows 11 Client</h1>
          </MainDownloadContainer>
    )
}