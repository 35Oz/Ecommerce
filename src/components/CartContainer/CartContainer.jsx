import { Link } from "react-router-dom"
import { useState } from 'react'

import { addDoc,  collection,  getFirestore } from 'firebase/firestore'
import { useCartContext } from '../../contexts/CartContext'
import './CartContainer.css'

import toast, { Toaster } from 'react-hot-toast';

function CartContainer() {
  const notify = () => toast('Compra exitosa');
  const [isId, setIsId] = useState('')
  const[formData,setformData] = useState({
    name:'',
    phone:'',
    email:'',
    eValidation:''
  })

  const {cartList, emptyCart, totalPrice, totalCant, deleteItem}= useCartContext()

  const endBuy = (evt) =>{
    evt.preventDefault()
    const order = {}
    order.buyer = formData
    order.items = cartList.map(({ id, price, quantity, name}) =>({ 
                                            id:id,
                                            name:name,
                                            price:price,
                                            quantity:quantity
                                            }
                                          ))

    order.total = totalPrice()
    order.total = totalCant()

    const db = getFirestore()
    const queryCollection  = collection(db, 'tickets')

    addDoc(queryCollection, order)
    .then(({ id }) => setIsId(id))
    .catch(err => console.log(err))
    .finally(() => {
      setformData({
      name:'',
      phone:'',
      email:'',
      eValidation:''
      })
      emptyCart()
      notify()
   })
  }
  const handleOnChange = (evt) =>{
    setformData({
        ...formData,
        [evt.target.name]: evt.target.value

    })
  }

  return (
   <>       
          {cartList.length == 0 ? 
          <div className="containerVoid">
              <h1>
                El id de su compra se vera aqui: {isId}
              </h1> 
            
            <br/>
           <h3>No hay productos en el carrito</h3>
           <Link className='btn btn-outline-dark' to='/'>Volver al Inicio</Link>
          </div>
           
          :
            <>
              {cartList.map(product => 
                                      <div className="containerProduct">
                                        <img  className="imgContainer" src={product.imageUrl} alt="image"/>
                                          <div className="detailContainer">
                                          Producto: {product.name} - Precio: ${product.price} - Cantidad: {product.quantity}
                                            <button className='deleteButton btn btn-danger ' onClick={() => deleteItem(product.id)}>X</button>
                                          </div>
                                      </div>
                            )
              }
              
              {isId != '' &&
              alert("Orden realizada, ¡Gracias!")}
              {totalPrice()!=0 && 
                <div className="containerPrice">
                  <p>Precio total: ${totalPrice()}</p>
                  <button className='emptyContainer btn btn-outline-danger' onClick={emptyCart} > Vaciar carrito  </button>
                </div>
              }

      
            
              
                <div className="formContainer">
                  <form className='letherContainer'>
                    <label>Ingresar nombre</label>
                    <input className="form-control" type="text" name="name" required onChange={handleOnChange} value={formData.name}/>
                    <label>Ingresar teléfono</label>
                    <input className="form-control" type="text" name="phone" required onChange={handleOnChange} value={formData.phone}/>
                    <label>Ingresar email</label>
                    <input className="form-control" type="text" name="email" required onChange={handleOnChange} value={formData.email}/>
                    <label>Confirmar email</label>
                    <input className="form-control" type="text" name="email" required onChange={handleOnChange} value={formData.eValidation}/>
                    <div>
                      <div className="buttonEnd">
                        <Link className='btn btn-outline-dark'onSubmit={endBuy} onClick={endBuy}> Terminar compra </Link>
                      </div>
                      <Toaster
                        position="bottom-right"
                        reverseOrder={false}
                      />
                    </div>
                  </form>
                </div>
            </>
          }
        
   </>
  )}

export default CartContainer