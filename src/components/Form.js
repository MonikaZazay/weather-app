import React from 'react';
const Form = (props) => {
    return (
    <>
        <input onChange= {props.onChange} 
        type = "text" value = {props.value} 
        placeholder = "Wpisz nazę miasta"></input>
        <button>Wyszukaj miasta</button> 
    </>
    );
}
 
export default Form;