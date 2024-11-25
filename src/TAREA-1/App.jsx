import { BlogPost } from './BlogPost'

const post = {
  titulo:"Ardillas",
  parrafo:'Hoy vi una ardilla.La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola. Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.',
  autor:{
    nombre:"Alejandro Martinez",
    titulo:"Estudiante Ingenieria en sistemas",
    imagen:"https://avatars.githubusercontent.com/u/69103950?s=400&u=d01e284c28a5a1d6bd221791580ead54e32a6a14&v=4"
  }
}

export function Page(){

  return (
    <BlogPost 
    titulo={post.titulo} 
    parrafo={post.parrafo}
    autor={post.autor}/>
  )
}