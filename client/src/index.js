import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { GameOverProvider } from './components/context/GameOverContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameOverProvider>
      <App />
    </GameOverProvider>
  </React.StrictMode>
);



