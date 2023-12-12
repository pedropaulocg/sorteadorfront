import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Typography } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Typography variant='h4' sx={{textAlign: 'center', color: '#900d0d', borderRadius: 10}}>
      Amigo Secreto <br /> do Natal <br /> em Natal :)
    </Typography>
    <Typography>
      <ul>
        <li>O valor do presente deve ser entre R$80,00 a R$100,00.</li>
        <li>Lembre-se, caso você sortear alguém, não tem como sortear de novo.</li>
        <li>O site foi desenvolvido por mim, Pedro, não me preocupei em ficar bonito, apenas funcional.</li>
        <li>Para sortear alguém, selecione seu nome no seletor abaixo e clique em sortear. O nome que aparecer será quem você tirou!</li>
        <li>Qualquer duvida, so falar comigo.</li>
        <li>Decorem quem vocês tiraram pois não tem como ver.</li>
      </ul>
        <p>OBS: eu não vou saber quem sorteou quem. Desenvolvi de uma forma que eu não saiba. Quem tiver curiosidade de como funciona so falar comigo também.</p>
    </Typography>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
