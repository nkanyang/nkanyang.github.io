import React from 'react';
import './App.css';
import Weather from "./components/weather";

// const API_KEY = "22fbcfec719c609ea81403ee2aeac5de";

function App() {
  return (
    <div className="app">
      {/* <Header></Header> */}
      <Weather></Weather>
      <footer className="page-footer">@copy2020.by JessieHan</footer>
    </div>
  );
}

export default App;
