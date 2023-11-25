import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"
import './ItemListContainer.css'

function ItemListContainer() {
  const [products, setProducts] = useState ([])
  const [loading, setLoading]   = useState (true)
  const {cid} = useParams ()

   useEffect(()=>{

      const dbFirestore     = getFirestore()
      const queryCollection = collection(dbFirestore, 'products')
      const queryFilter     = cid ? query (queryCollection, where('category','==',cid)) :  queryCollection
  
      getDocs(queryFilter)
      .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }) ) ))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    
  },[cid])

  return (
   <>
      <div className="container">
        <div className="containerLogo">
          <img src="/assets/logo2.png" width="350" height="350" className="logoImg" />
   
        </div>
      </div>
      {
      loading ? 
        <Loading/>
      :
        <ItemList products={products}/>
      }   
   </>

  )
}

export default ItemListContainer

