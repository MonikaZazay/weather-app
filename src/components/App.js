import React from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

class App extends React.Component {
  state = {
    value: '',
    data: []
    }

    handleInputChange = (e) => {
      this.setState({
        value: e.target.value
      })

    }

  render() { 
    return ( 
    <>
    <Form onChange = {this.hendleInputChange} value = {this.state.value}/>
    <Result />
    </> );
  }
}
 
export default App;
