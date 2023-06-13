import React from 'react'
import { useState, useEffect } from 'react'

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect( ()=>{
        document.title=`ADIDAS ${categoria}`;
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria);
    };

  return (
    <div>
        <h2>Categoría de productos</h2>
        <button onClick={ () => handleClick("Indumentaria")}> Indumentaria </button>
        <button onClick={ () => handleClick("Calzado")}> Calzado </button>
        <button onClick={ () => handleClick("Accesorios")}> Accesorios </button>
        <button onClick={ () => handleClick("Otros")}> Otros </button>
    </div>
  )
}

export default Categorias
