import React from 'react';
import './App.css';
import './Form.css';
import Form from './Form'
import Result from './Result'

class App extends React.Component {
  state = {
    value: '',
    time: '',
    sunrise: '',
    sunset: '',
   temp: '', 
   pressure: '',
  speed: '',
    error: false
    }

  componentDidUpdate(prevProps, prevState){
    if (prevState.value !== this.state.value) {
      const cityName = this.state.value
     

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f050b0bb3c86157142cbc751f34f0810&units=metric&lang=pl`)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error("Błąd")
    })
    .then(response => response.json())
   .then(data => { 
    const newTime = new Date().toLocaleTimeString()
    this.setState({
    error: true, 
    time: newTime,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
   temp: data.main.temp, 
   pressure: data.main.pressure,
  speed: data.wind.speed
  })
})
    .catch(err => {
      this.setState({
        error: false
      })
      console.log(err)
    })     
    }

  }

    handleInputChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }


  render() { 
    console.log(this.state)
    console.log(this.state.value)

    return ( 
    <div className="wrap">
      <div className="box">

    <Form 
    onChange = {this.handleInputChange} 
    value = {this.state.value}/>
    </div>
    {this.state.error && <Result data = {this.state}/>}
    </div> );
  }
}
 
export default App;
