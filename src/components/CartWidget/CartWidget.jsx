import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "../src/assets/imagen-carrito.png"

  return (
    <div className='divCarrito'>
      <Link style={{ textDecoration: "none" }} to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        {
          cantidadTotal > 0 && <strong className='numeroCarrito'> {cantidadTotal} </strong>
        }
      </Link>
    </div >
  )
}

export default CartWidget
