import React from 'react';
import './App.css';
import Header from './components/header';
import WeatherForm from './components/WeatherForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      longitude: '',
      latitude: ''
    }
    this.getLocation = this.getLocation.bind(this);
  }

  render() {
    return (
        <div className="App">
          <Header />
          <WeatherForm getLocation={this.getLocation}/>
        </div>
    );
  }
}

export default App;
