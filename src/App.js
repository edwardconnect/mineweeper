import React from 'react';
import logo from './logo.svg';
import './App.css';
import Settings from './components/Settings';
import { GlobalStateContextProvider } from './hook/Context';

function App() {
  return (
    <GlobalStateContextProvider>

      <div className="App">
        <Settings />

      </div>
    </GlobalStateContextProvider>
  );
}

export default App;
