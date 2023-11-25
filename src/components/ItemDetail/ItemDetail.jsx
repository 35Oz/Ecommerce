import React from 'react'

export const ItemDetail = ({data}) => {
  
  return (
      
       <div className="card w-25 ">
              <img src={data.imageUrl} className="card-img-top" />
              <div className="card-body">
              <p>Nombre: {data.name}</p>
              <p>Categoria: {data.category}</p>
              <p>Descripcion: {data.description}</p>
              <p>Precio: {data.price}</p>
            </div>
        </div>
      
  )
}

export default ItemDetail