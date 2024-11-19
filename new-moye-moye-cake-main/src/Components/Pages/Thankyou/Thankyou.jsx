import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import './Thankyou.css';
import { useLocation } from 'react-router-dom';
import Completed_icon from '../../../assets/images/completed.gif';
import product_image from '../../../assets/images/coffee-cake.jpg';
const Thankyou = ({cart}) => {
    
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
    return(
        <>
        
        <div className="thank-you-sec">
            <Row gutter={16}>
                <Col span={24}>
                    <div className="order-head-wrp">
                        <h1 className='main-title'>Thank You!</h1>
                        <h2>We appreciate your support!</h2>
                        <p>Thank you for choosing Moye moye Cake! Your order has been successfully received.</p>
                      <img src={Completed_icon} alt="completed icon" />
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <table className="order-item-table">
                        <thead>
                            <tr>
                                <th>
                                    SL.No
                                </th>
                                <th>
                                    Order ID
                                </th>
                                <th>
                                    Product Details
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                id ? (
  <>
<tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    #{94+id+90+id}
                                </td>
                                <td>
                                    <table border="1">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Product Image
                                                </th>
                                                <th>
                                                    Product Name
                                                </th>
                                                <th>
                                                    Product Quantity
                                                </th>
                                                <th>
                                                    Product Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td className='product-img'>
                                            <img src={image} alt="item image"/>
                                            </td>
                                            <td>
                                            {title.slice(0, 10)}...
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                            ₹{price}{category == "all-flavours" ? '/kg' : '/LTR'}
                                            </td>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
  </>
                                ) : (

                            <>
                        {cart.map((item, index) => (
                            <tr>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    #{94+index+90+index}
                                </td>
                                <td>
                                    <table border="1">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Product Image
                                                </th>
                                                <th>
                                                    Product Name
                                                </th>
                                                <th>
                                                    Product Quantity
                                                </th>
                                                <th>
                                                    Product Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td className='product-img'>
                                            <img src={item.image} alt="item image"/>
                                            </td>
                                            <td>
                                            {item.title.slice(0, 10)}...
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                            ₹{item.price}{item.category == "all-flavours" ? '/kg' : '/LTR'}
                                            </td>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                             ))}
                             </>
                             )
                            }
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <div className='thankyou-footer'>
                        <div className='thankyou-social-media'>
                        <h2>Stay Connected</h2>
                        <p>Follow us on social media to stay updated on our latest products, promotions, and more!</p>
                        <ul className='social-link-wrp'>
                        <li>
                            <a href="/"><i class="fa-brands fa-instagram"></i></a> 
                        </li>
                        <li>
                            <a href="/"><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                        <a href="/"><i class="fa-brands fa-twitter"></i></a> 
                        </li>
                    </ul>
                    
                        </div>
                        <div className="share-love-wrp">
                            <h2>Share the Love</h2>
                            <p>Loved your experience with us? Spread the word to your friends and family!</p>
                            <h2>Exclusive Offer</h2>
                            <p>As a token of our appreciation, here's a special discount code for your next purchase: THANKYOU10 (Enter this code at checkout to enjoy 10% off).</p>
                            Thank you again for choosing Moye Moye Cakes. We look forward to serving you again soon!
                        </div>
                    
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Thankyou;