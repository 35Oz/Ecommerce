import { useCartContext } from '../../contexts/CartContext'
import './carWidget.css'

export const CartWidget = () => {
  const {totalCant}= useCartContext()

  return (
    <div className='cartContainer'>
       <button  className="btn btn-outline-dark">
          <i className=" bi-cart">{totalCant() !== 0 && totalCant()
          }</i> 
        </button> 
    </div>
  )
}

