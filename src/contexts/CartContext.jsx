import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContexProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        
        const productIndex = cartList.findIndex(prod => prod.id == product.id)
        if (productIndex == -1){
            setCartList([
                ...cartList,
                product
            ])
        } else {
            cartList[productIndex].quantity +=product.quantity
            setCartList([...cartList])
        }
        
    };

    const emptyCart = () => {
        setCartList([])
    }

    const deleteItem = (id) => setCartList(cartList.filter(productObject => productObject.id !== id));
    const totalPrice = () => cartList.reduce((total,productObject) => total = total + (productObject.price * productObject.quantity), 0)
    const totalCant =  () => cartList.reduce((total,productObject) => total = total + (productObject.quantity), 0)
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalCant,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
 }