import { useState } from "react"

export function MatchNombre(props){
    const [value, setValue] = useState('input')

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

