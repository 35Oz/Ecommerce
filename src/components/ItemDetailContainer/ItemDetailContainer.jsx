import React, { useState, useEffect, } from 'react'


import { Link, useParams } from 'react-router-dom'
import { ItemCounter } from '../ItemCounter/ItemCounter'
import { useCartContext } from '../../contexts/CartContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Loading } from '../Loading/Loading'
import './ItemDetailContainer.css'


export const ItemDetailContainer=() => {
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  const [quantityAdded, setQuantityAdded] = useState (0)
  const {addToCart} = useCartContext()
  const [loading, setLoading]   = useState (true)
  
  useEffect(()=>{
    const dbFirestore = getFirestore()
    const queryDoc    = doc(dbFirestore, 'products', pid)
    getDoc(queryDoc)
    .then(res => setProduct({id: res.id, ...res.data() } ))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  },[])

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    addToCart({...product,quantity})
  }

 
  return (
    <div className="conteinerImg1 row">
      <div className="conteinerImg mt-5 ">
        <img src={product.imageUrl} width={500} height={450} className="imgConteiner"/>
      </div>
      {
        loading ?
        <Loading/>
        :
        
            <div className="containerDetail1 col-4 ">
                <div className=' containerDetail'>
                 
                  <p>Nombre: {product.name}</p>
                  <p>Categoria: {product.category}</p>
                  <p>precio: {product.price}</p>

                  { 
                    quantityAdded > 0 ? (
                      <div className='buttons row'>
                        <div class="col-md-6">
                          <Link to= '/' className= 'Option'>
                          <button className='btn btn-outline-dark'>Volver a comprar </button>
                          </Link>
                        </div>
                      <div class="col-md-4">
                      <Link to= '/cart' className= 'Option'>
                      <button className='btn btn-outline-dark'>Ir al carrito</button>
                      </Link>
                        </div>
                      </div>

                    ) : (
                      <ItemCounter initial={1} stock={5} onAdd={handleOnAdd}/>
                    )
                  }
                </div>
            </div>
      }
    </div>

  )
}

export default ItemDetailContainer