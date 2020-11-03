import React from 'react';
import './App.css';
import Header from './components/header';
import WeatherForm from './components/WeatherForm';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Header />
          <WeatherForm />
        </div>
    );
  }
}

export default App;
