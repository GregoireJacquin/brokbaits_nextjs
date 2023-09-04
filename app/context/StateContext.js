"use client"
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity, index) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id && item.colorSelected === product.color[index]);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const indexItem = cartItems.findIndex((cartProduct) => cartProduct._id === product._id && cartProduct.colorSelected === product.color[index])
      const cartProduct = cartItems[indexItem]
      cartItems[indexItem] = {
        ...product,
        quantity: cartProduct.quantity + quantity,
        colorSelected: product.colorSelected = product.color[index],
        imageSelected: product.image[index]
      }
    } else {
      product.quantity = quantity;
      product.colorSelected = product.color[index];
      product.imageSelected = product.image[index];
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.title} ajouté au panier`);
  }

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id && item.colorSelected === product.colorSelected);
    const newCartItems = cartItems.filter((item) => item._id === product._id && item.colorSelected !== product.colorSelected);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuanitity = (product, value) => {
    foundProduct = cartItems.find((item) => item._id === product._id && item.colorSelected === product.colorSelected)
    index = cartItems.findIndex((item) => item._id === product._id && item.colorSelected === product.colorSelected);
    const newCartItems = cartItems.filter((item) => item._id === product._id && item.colorSelected !== product.colorSelected)

    if (value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
      setTotalPrice((prevTotalPrice) => parseFloat(prevTotalPrice) + parseFloat(product.price))
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
        setTotalPrice((prevTotalPrice) => parseFloat(prevTotalPrice) - parseFloat(product.price))
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);