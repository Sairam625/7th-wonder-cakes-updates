import React from "react";
import { Row, Col} from 'antd';
import Item_Data from './Data';
import { Link } from 'react-router-dom';
const Cold_Hot_Drinks = ({ addToCart, cart, removeFromCart }) => {
    return(
        <>
        <div className="category-tems-sec">
        <Row gutter={16}>
        {
  Item_Data.map((item, index) => (
    <Col span={6} key={"product-"+index} id={"product-"+index}>
      <div className="item-wrp">
        <Link to={`single-product?id=${encodeURIComponent(item.id)}&category=${encodeURIComponent(item.category)}&title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(item.price)}&image=${encodeURIComponent(item.image)}`}><img src={item.image} alt="item image"/></Link>
        <h2>{item.title.slice(0,22)}...</h2>
        <p>{item.description.slice(0, 50)}...</p>
        <button onClick={() => addToCart({id: index, title: item.title, description: item.description, price: item.price, image: item.image, category:item.category})} className="item-btn">Add to cart</button>
      </div>
    </Col>
  ))
}
        </Row>
        </div>
        </>
    ) 
}

export default Cold_Hot_Drinks;