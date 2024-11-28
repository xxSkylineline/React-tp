import { useState } from "react"

export function MatchNombre(props){
    const [value, setValue] = useState(false)

    const nombre = props.nombre
    
    const handleChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue === nombre)
    }

    return(
        <> 
        <input type="text" 
        className={value? 'input-match':'input'}
        onChange={handleChange}
            />
        </>
    )
}

export function PasswordInput(props){
    const [value, setValue] = useState(false)

    const longitud = props.longitud
    
    const handleChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue.length <= longitud)
    }

    return(
        <> 
        <input type="password" 
        className={value? 'input-match':'input'}
        onChange={handleChange}
            />
        </>
    )
}

export function ValidationInput(props){
    const contentRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}))$/

    const [validation, setValidation] = useState(false);
    const longitud = props.longitud

    function inputValidation(event){
        const content = event.target.value;
        if(content.length>=longitud && contentRegex.test(content)){
            setValidation(true)
        }
    }

    return(
        <>
         <input
         type={validation? 'password':''}
         className={validation? 'input-match':'input'}
         onChange={inputValidation}
         />
        </>
    )
}