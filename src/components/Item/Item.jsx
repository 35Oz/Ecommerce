import { Link } from "react-router-dom"
import './Item.css'

export const Item = ({product}) => {
  return (
    
        <div className="card  w-25 mx-auto">
            <img src={product.imageUrl} className="card-img-top"/>
            <div className=" card-body">
                <p>Nombre: {product.name}</p>
                <p>Category: {product.category}</p>
                <p>Precio: ${product.price}</p>
            </div>
            <div className="card-footer">
              <Link to={`/detail/${product.id}`}> 
                 <button className="btn btn-outline-dark w-100">detalle</button> 
              </Link>
            </div>
        </div>
      
        
    
  )
}

