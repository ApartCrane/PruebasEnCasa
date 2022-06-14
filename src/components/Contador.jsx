import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)
    const aumentar = () =>{
        
        console.log('click');
        setContador(contador + 1)
    }
  return (
    <div>
        <h2>Contador Loco</h2>
        <h3>El numero va en: {contador}</h3>
        <h4>
            {
                //evaluar ? exito : negativa
                contador > 2 ? 'Es mayor a 2' : 'Es menor enfermo'
            }
        </h4>
        <button onClick={() => aumentar()} >Picaaaaaa</button>
    </div>
  )
}

export default Contador