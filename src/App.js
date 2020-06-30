import React from 'react';
import './App.css'
import ForecastContainer from './containers/ForecastContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ethan Ozelius' 5 day forecast!</h1>
        <h3> - Now with more freezing rain!</h3>
      </header>
      <ForecastContainer />
    </div>
  );
}

export default App;
