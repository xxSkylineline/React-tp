/* eslint-disable react/prop-types */
function Card(props){

    return (
        <div className="tarjeta">                
            <header className="tarjeta-data-header">{props.nombre}</header>
            <img src={props.imagen} alt='Foto de perfil' className="tarjeta-img"/>
            <div className="tarjeta-data">
                <span>{props.titulo}</span>
            </div>
        </div>
    )
}

export function BlogPost(props){
  return(  
  <article className="post">
      <header className="post-header">
        <h2 className="post-title">{props.titulo}</h2>
        <Card nombre={props.autor.nombre}
        titulo={props.autor.titulo}
        imagen={props.autor.imagen} />
      </header>
      <div>
      {props.parrafo.split('.').map((parrafo, index) =>(
        <p key={index} className="post-paragraph">{parrafo}</p>
      ))}
      </div>
    </article>)

}