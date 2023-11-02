import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFech"
import { Link, useParams } from "react-router-dom"


function ItemListContainer({greeting}) {
  const[products, setProducts] = useState([])
  const [loading, setLoading] = useState (true)
  const {cid} = useParams()

   useEffect(()=>{
    if(cid){
      mFetch() 
      .then(result => setProducts(result.filter(product => product.category == cid)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

    }else{
      mFetch() 
      .then(result => setProducts(result))
       .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }
  },[cid])

  return (
   <>
    <div>
      <h2>{greeting}</h2>
    </div>
    {
    loading ? <h2>Cargando...</h2>
    :
        products.map (product => 
        <div className="card w-25 ">
              <img src={product.imageUrl} className="card-img-top" />
              <div className="card-body">
              <p>Nombre: {product.name}</p>
              <p>Categoria: {product.category}</p>
              <p>Descripcion: {product.description}</p>
              <p>Precio: {product.price}</p>
        </div>

          <div className="card-fo  oter">
            <Link to={`/detail/${product.id}`}> 
              <button className="btn btn-outline-dark w-100">detalle</button> 
            </Link>
          </div>

        </div>
    )}
   </>

  )
}

export default ItemListContainer

