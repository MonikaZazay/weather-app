import React from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

class App extends React.Component {
  state = {
    value: '',
    data: []
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const cityName = this.state.value
     

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f050b0bb3c86157142cbc751f34f0810&units=metric&lang=pl`)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error("Błąd")
    })
    .then(response => response.json())
   .then(data =>  this.setState({data}))
    .catch(err => console.log(err))     
  
  
  }

    handleInputChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }


  render() { 
    return ( 
    <>

    <Form 
    onSubmit = {this.handleSubmit} 
    onChange = {this.handleInputChange} 
    value = {this.state.value}/>
    <Result />
    </> );
  }
}
 
export default App;
