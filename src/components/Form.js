import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'



const Form = (props) => {
    return (
    <div className = "box">
        <div className = "form">
       <h2> Wyszukaj miasta</h2> 
    <form  onSubmit = {props.onSubmit}>
    
        <div className = "inputBox">
        <input
        type = "text" 
        value = {props.value} 
        onChange = {props.onChange} 
        placeholder = "Wpisz nazę miasta"
        
        ></input>
        <FontAwesomeIcon icon={faCity} />
        

        </div>
    </form>
    </div>
    </div>
    );
}
 
export default Form;