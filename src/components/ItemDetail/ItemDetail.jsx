import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  
  const [agregarCAntidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);
  
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados:" + cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }
  
  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, non, id maiores inventore soluta praesentium quasi quae nihil unde, enim molestiae ipsum nostrum consequuntur debitis illum corporis esse delectus ut!</p>
      <img className='imgDetail' src={img} alt={nombre} />
      {
        agregarCAntidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
      <Link className="miBtn" to='/'> Seguir comprando </Link>
    </div>
  )
}

export default ItemDetail
