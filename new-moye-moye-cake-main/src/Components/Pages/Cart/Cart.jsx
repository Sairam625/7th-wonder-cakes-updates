import React, { useEffect, useState } from 'react';
import './Cart.css';
import {Row, Col} from 'antd';
import { Link } from 'react-router-dom';
const Cart = ({ cart = [], removeFromCart, Decrement, Increment, Subtotal, Total, Tax }) => { 
return (

<div className="cart-sec">
  <Row gutter={16}>
    <Col span={16}>
      <h2 className="cart-main-title">Your Cart</h2>
      <ul className="cart-items-wrp">
      {cart.map((item, index) => (
        <li>
          <span className="product-img">
          <img src={item.image} alt="item image"/>
          </span>
          <span className="product-cont">
            <h4>{item.title}</h4>
            <p>{item.description.slice(0, 50)}...</p>
            <p>Price: ₹{item.price}{item.category == "all-flavours" ? '/kg' : '/LTR'}</p>
          </span>
          <span className="product-quantity">
            <span>
              <button onClick={() => Decrement(index)}>-</button>
              <input type="number" value={cart[index].quantity} />
              <button onClick={() => Increment(index)}>+</button>
            </span>
          </span>
          <span className="remove-product">
              <button onClick={() => removeFromCart(index)}><i class="fa-solid fa-trash"></i></button>
            </span>
        </li>
        ))}
      </ul>
    </Col>
    <Col span={8}>
      <div className="cart-billing-wrp">
        <h3 className="cart-total-title">Cart Total</h3>
         <table>
          <thead>
            <tr>
              <th>Subtotal:</th>
              <td>₹
                <span>{Subtotal}</span> 
              </td>
            </tr>
            <tr>
              <th>SHIPPING:</th>
              <td>₹
                <span>50</span> 
              </td>
            </tr>
            <tr>
              <th>Tax 10%:</th>
              <td>
                <span>₹{Tax}</span> 
              </td>
            </tr>
            <tr>
              <th>Total:</th>
              <td>₹
                <span>{Total}</span> 
              </td>
            </tr>
           
          </thead>
          <tbody>
            <Link to="cart/checkout" className="checkout-btn">Proceed to checkout</Link>
          </tbody>
         </table>
      </div>
    </Col>
  </Row>
  </div>
    )
}

export default Cart;
