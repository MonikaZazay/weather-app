import React from 'react';
const Form = (props) => {
    return (
    <form onSubmit = {props.onSubmit}>
        <input
        type = "text" 
        value = {props.value} 
        onChange = {props.onChange} 
        placeholder = "Wpisz nazę miasta"
        
        ></input>
        <button type = "submit">Wyszukaj miasta</button> 
    </form>
    );
}
 
export default Form;