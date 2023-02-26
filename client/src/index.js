import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { GameOverProvider } from './components/context/GameOverContext';

// Creating a new React root element for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrapped in a StrictMode element for debugging purposes
root.render(
  <React.StrictMode> 
    <GameOverProvider>
      <App />
    </GameOverProvider>
  </React.StrictMode>
);



