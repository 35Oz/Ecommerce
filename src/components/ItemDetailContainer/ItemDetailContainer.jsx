import React, { useState, useEffect } from 'react'
import { mFetch } from '../../helpers/mFech'
import { useParams } from 'react-router-dom'
import { ItemCounter } from '../ItemCounter/ItemCounter'



export const ItemDetailContainer=() => {
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  
  useEffect(()=>{
      mFetch(pid)
      .then(resultado => setProduct(resultado))
      .catch(error => console.log(error))
  }, [])

  const onAdd = cant =>{
    console.log('cantidad seleccionada:', cant)
  }

  return (
    <div className="row">
      <div className="col-6 mt-5">
        <img src={product.imageUrl} alt="" className="img-fluid"/>
      </div>
      <div className="col-6 text-center mt-5">
          <p>Nombre: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>precio: {product.price}</p>
          <ItemCounter initial={1} stock={5} onAdd={onAdd}/>
      </div>
    </div>

  )
}

export default ItemDetailContainer