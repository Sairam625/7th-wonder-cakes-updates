import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import About from '../Components/Pages/About-us/Aboutus';
import Contact from '../Components/Pages/Contact/Contact';
import Cart from '../Components/Pages/Cart/Cart';
import Popular_item from '../Components/Pages/Category/Popular-items/Poplar-item';
import Cold_Hot_Drinks from '../Components/Pages/Category/Cold-hot-Drink/Cold-hot-drinks';
import All_Flavours from '../Components/Pages/Category/All-flavour/All-flavour';
import Best_Seller from '../Components/Pages/Category/Best-seller/Best-seller';
import Single_Product from '../Components/Pages/Single-product/Single-product';
import Checkout from '../Components/Pages/Checkout/Checkout';
import Thankyou from '../Components/Pages/Thankyou/Thankyou';
import Login from '../Components/Pages/Login/Login';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Data from '../Components/Pages/Category/All-flavour/Data';
import Data2 from '../Components/Pages/Category/Cold-hot-Drink/Data';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Index = () => {
  //Set the cart item
  const [isLoading, setIsLoading] = useState(false); // State variable for loading

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
        withReactContent(Swal).fire({
        title: "Success",
        text: "Your item has been added to the cart successfully!",
        icon: "success"
               
              })
    localStorage.setItem('cart', JSON.stringify(newCart));
    setIsLoading(false);
  };
 
  //Remove the item from the cart page

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    withReactContent(Swal).fire({
      title: "Success",
      text: "Your item has been successfully removed from the cart!",
      icon: "success"
             
            })
    localStorage.setItem('cart', JSON.stringify(newCart));
    setIsLoading(false);
  };
// JSX for displaying loader
const Loader = () => {
  return isLoading ? <div>Loading...</div> : null;
};
  useEffect(() => {
    window.addEventListener('storage', () => {
      const storedCart = localStorage.getItem('cart');
      setCart(storedCart ? JSON.parse(storedCart) : []);
    });
  }, []);

//Set the item quantity
const [ getQuantity, setQuantity ] = useState(1);

// Increment the item quantity
const Increment = (index) => {
  const updatedCart = [...cart];
  updatedCart[index].quantity += 1;
  setCart(updatedCart);
};

// Decrease the item quantity
const Decrement = (index) => {
  const updatedCart = [...cart];
  if (updatedCart[index].quantity > 1) {
    updatedCart[index].quantity -= 1;
    setCart(updatedCart);
  }
};


const [getSubtotal, setSubtotal] = useState(0);

  // Calculate subtotal
  useEffect(() => {
    let subtotal = 0;
    cart.forEach(item => {
      // Ensure item.price is a number before adding it to subtotal
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        subtotal += price;
      }
    });
    setSubtotal(subtotal);
  }, [cart]);

  const shipping = 50;
  const tax = getSubtotal * 0.10;
  const total = getSubtotal + shipping + tax;

  return (
    <>
      <Router>
      <Header cart={cart} products={[...Data, ...Data2]} />
        <Routes>
          <Route path="/" index element={<Home addToCart={addToCart}/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart cart={cart} removeFromCart={removeFromCart} Decrement={Decrement} Increment={Increment} Subtotal={getSubtotal} Total={total} Tax={tax}/> } />
          <Route path="popular-item" element={<Popular_item />} />
          <Route path="cold-hot-drinks" element={<Cold_Hot_Drinks addToCart={addToCart}/>} />
          <Route path="all-flavours" element={<All_Flavours  addToCart={addToCart}/>} />
          <Route path="best-seller" element={<Best_Seller />} />
          <Route path="/:category/:single-product" element={<Single_Product addToCart={addToCart} removeFromCart={removeFromCart}/>} />
          <Route path="/:category/:single-product/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} Subtotal={getSubtotal} Total={total} Tax={tax}/>} />
          <Route path="/:category/:single-product/checkout/thankyou" element={<Thankyou cart={cart}/>} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Index;
