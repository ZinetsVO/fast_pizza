import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider ({children}) {

    const [cart, setCart] = useState([{
        id: 2,
        imageUrl: "/_next/static/media/4_seasons.3a598905.jpg",
        title: "4 сезони",
        basement: "Тонке",
        diametr: 28,
        price: 260
    }])

    const addToCart = (item) => {
        setCart( (prevCart) => {
          const newCart = [...prevCart, item];
          return newCart;
        })

    }
    

  return (
    <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>

  )
}

export function useCart () {
    return useContext(CartContext)
}