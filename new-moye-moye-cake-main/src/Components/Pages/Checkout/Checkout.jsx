import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import './Checkout.css';
import Province from './Province';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Phone_pe from '../../../assets/images/PhonePe-Logo.png';
import G_Pay from '../../../assets/images/Google-Pay-logo.png';
import pp_qr_code from '../../../assets/images/phone-pe.jpg';
import Gpay_qr_code from '../../../assets/images/gpay.jpg';

const Checkout = ({ cart = [], removeFromCart, Subtotal, Total, Tax }) => {

const location = useLocation();
const [id, setId ] = useState();
const [ category, setCategory ] = useState();
const [title, setTitle] = useState();
const [image, setImage ] = useState();
const [description, setDescription ] = useState();
const [price, setPrice ] = useState();
const [getPhonepe, setPhonepe] = useState();
const [phonepeVisible, setPhonepeVisible] = useState(false);
const [getGpay, setGpay] = useState();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const title = params.get('title');
  const description =params.get('description');
  const image = params.get('image');
  const price = params.get('price');
  const category = params.get('category');

  setId(id);
  setCategory(category);
  setTitle(title);
  setDescription(description);
  setImage(image);
  setPrice(price);
 
}, [location.search])
const subtotal =+ price + 50; 
const single_product_tax =  subtotal * 0.10;
const final_price = subtotal + subtotal * 0.10;

const phonePeHandler  = () => {
  setPhonepe(<img src={pp_qr_code} alr="QR code"/>);
  setPhonepeVisible(true);
  setGpay();
}
const Gpay = () =>{
setGpay(<img src={Gpay_qr_code} alr="QR code"/>);
setPhonepe();
setPhonepeVisible(true);
}
const closepopup = (event) => {
  event.preventDefault();
  setPhonepeVisible(false);
  
}
    return(
        <div className="checkout-sec">
          <Row gutter={16}>
            <Col span={12}>
              <div className="checkout-form-wrp">
              <h2>Checkout</h2>
              <form>
                <h5>Shipping Address</h5>
                <p className="flex-item">
                  <span className="firstname"><input type="text" placeholder="First Name *"/></span>
                  <span className="lastname"><input type="text" placeholder="Last Name *"/></span>
                </p>
                <p>
                  <span><input type="text" placeholder="Street Address"/></span>
                </p>
                <p>
                  <span><input type="text" placeholder="Apt / State / Unit (Optional)"/></span>
                </p>
                <p className="flex-item">
                  <span><input type="text" placeholder="City *"/></span>
                  <span className="province-wrp">
                    <select>
                      {
                        Province.map((province_item, index) => ( 
                          <option id={index}>{province_item.name}</option>
                        ))
                      }
                      
                    </select>
                  </span>
                </p>
                <p>
                  <span><input type="text" placeholder="Postal Code *"/></span>
                </p>
                <div className="shipping-wrp">
                <h4>Shipping Method</h4>
                <p>
                  <input type="text" placeholder="Enter a shipping address to see acurate shipping option for your order."/>
                </p>
              </div>
              </form>
              
              </div>
              
            </Col>
            <Col span={12}>
              <div className="checkout-billing-wrp">
                <h3>Order Items</h3>
                <p className="shipping-time">Arives in 30 minutes</p>
                {
  id ? (
    <div className="order-item" id={"product-" + id}>
      <span><img src={image} alt="product image" /></span>
      <span>
        <h4>{title}</h4>
        <p>200Gm</p>
        <p>₹{price} INR</p>
        <div className="remove-product">
          <span>
            <a href="/">Edit</a>
          </span>
          <span>
            <a href="/">Remove</a>
          </span>
        </div>
      </span>
    </div>
  ) : 
  (
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
        
         <span className="remove-product">
             <button onClick={() => removeFromCart(index)}><i class="fa-solid fa-trash"></i></button>
           </span>
       </li>
       ))}
       </ul>
  )
}

 

                <div className="order-summary-wrp">
                  <h4>Order Summary</h4>
                   
                  <div className="cart-billing-wrp">
       
         <table>
          <thead>
            <tr>
              <th>Subtotal:</th>
              <td>₹
                <span>
                {
                  id ? (
                    price
                  ) : ( 
                    Subtotal 
                  )  
                }  
                </span> 
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
                <span>₹
                  {
                  id ? (  
                    single_product_tax
                    ) : (
                      Tax
                    )
                  }</span> 
              </td>
            </tr>
            <tr>
              <th>Total:</th>
              <td>₹
                <span>
                {
                  id ? (
                    final_price
                  ) : (
                    Total
                  )
                }  
                </span> 
              </td>
            </tr>
           
          </thead>
           
         </table>
      </div>
                </div>
                <div className="payment-method">
                  <p className="cod-btn">
                    <input type="radio" name="payment"/>
                    <span>Cash on delivery</span>
                  </p>
                  <p className="phonepe-btn">
                  <input type="radio" name="payment" onClick={phonePeHandler} />
                    <span className="payment-wrp">
                      <img src={Phone_pe} alt="Phone Pe"/>
                      <span>Phone Pe</span>
                    </span>
                  </p>
                  <p className="gpay-btn">
                    <input type="radio" name="payment" onClick={Gpay}/>
                    <span className="payment-wrp">
                      <img src={G_Pay} alt="Phone Pe" />
                      <span>G Pay</span>
                    </span>
                  </p>
                </div>
                <div className="order-btn">
                  <Link to="thankyou">Place order</Link>
                </div>
              </div>
            </Col>
          </Row>
{
  phonepeVisible && (
   
        <div className='react-pop'>
        <a href="#" className='close-popup' onClick={closepopup}>Close</a>
        <div>
        
          {getPhonepe}
          {getGpay}
          </div>
      </div>

  ) 
}
          
        </div>
    )
}

export default Checkout;