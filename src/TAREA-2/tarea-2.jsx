import { MatchNombre , PasswordInput , ValidationInput} from "./componente"
const nombre='Ale'
const longitud = 8
export function Page(){
    return(<>
    <MatchNombre nombre={nombre}/>
    <PasswordInput longitud={longitud}/>
    <ValidationInput longitud={longitud}/>
    </>
    )
}