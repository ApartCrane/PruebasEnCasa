import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista,setLista] = React.useState([])
    const guardarDatos =(e) =>{
      e.preventDefault()
      console.log('Cargando...');

      if(!fruta.trim()){
          console.log('Vacio madafaka Fruta');
          return
      }

      if(!descripcion.trim()){
        console.log('Vacio madafaka Desc');
        return
    }
    console.log('Procesando' + fruta + descripcion);

    setLista([
      ...lista, 
      {fruta: fruta, descripcion: descripcion}
    ])

    e.target.reset()

    setFruta('')
    setDescripcion('')
    }
  return (
    <div>
        <h2>Formulario pa</h2>
        <form onSubmit={guardarDatos} >
            <input
            type="text"  
            placeholder='Ingresa Aja'
            className='form-control mb-2'
            onChange={e =>setFruta(e.target.value)}
            />
            <input
            type="text"  
            placeholder='Ingresa descripcion'
            className='form-control mb-2'
            onChange={e => setDescripcion(e.target.value)}
            />
            <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
        </form>
        <ul>
          {
            lista.map((item, index) =>(
              <li key={index}>
                {item.fruta} - {item.descripcion}
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Formulario