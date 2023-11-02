const products=[
    {id:1, name:'Producto 1', category:'gorras', price:1000, stock:500, description:'descripcion breve del producto', imageUrl:'https://quilua-a973.kxcdn.com/media/catalog/product/cache/7180f3f54bdf006237d96b9c6b62dea2/g/o/gorra_trucker_fluor_rosa_1.jpg'},
    {id:2, name:'Producto 1', category:'gorras', price:1000, stock:500, description:'descripcion breve del producto', imageUrl:'https://quilua-a973.kxcdn.com/media/catalog/product/cache/7180f3f54bdf006237d96b9c6b62dea2/g/o/gorra_trucker_fluor_rosa_1.jpg'},
    {id:3, name:'Producto 1', category:'gorras', price:1000, stock:500, description:'descripcion breve del producto', imageUrl:'https://quilua-a973.kxcdn.com/media/catalog/product/cache/7180f3f54bdf006237d96b9c6b62dea2/g/o/gorra_trucker_fluor_rosa_1.jpg'},
    {id:4, name:'Producto 1', category:'gorras', price:1000, stock:500, description:'descripcion breve del producto', imageUrl:'https://quilua-a973.kxcdn.com/media/catalog/product/cache/7180f3f54bdf006237d96b9c6b62dea2/g/o/gorra_trucker_fluor_rosa_1.jpg'},
    {id:5, name:'Producto 2', category:'remeras', price:500, stock:90, description:'descripcion breve del producto', imageUrl:'https://i.pinimg.com/564x/63/2c/c0/632cc0e8dc3d86993477cf0ad2b8a182.jpg'}

]

export const mFetch= (id)=>{
    return new Promise((res, rej) =>{ 
      setTimeout(()=> {
        res(id ? products.find(prod => prod.id == id):products)
      },500)
  })
  }
  
