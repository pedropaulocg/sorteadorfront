import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Typography } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Typography variant='h4' sx={{textAlign: 'center', color: '#900d0d', borderRadius: 10}}>
      Amigo Secreto <br /> do Natal <br /> :)
    </Typography>
    <Typography>
      <ul>
        <li>Lembre-se, caso você sortear alguém, não tem como sortear de novo.</li>
        <li>Para sortear alguém, selecione seu nome no seletor abaixo e clique em sortear. O nome que aparecer será quem você tirou!</li>
        <li>Decorem quem vocês tiraram pois não tem como ver.</li>
      </ul>
    </Typography>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
