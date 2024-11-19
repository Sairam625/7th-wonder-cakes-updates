import React from 'react';
import welcome_banner from "../../../assets/home-images/welcome-banner.jpg";
import banner_1 from "../../../assets/home-images/banner1.jpg";
import banner_2 from "../../../assets/home-images/banner2.jpg";
import banner_3 from "../../../assets/home-images/banner3.jpg";
import banner_4 from "../../../assets/home-images/banner4.jpg";
import "./Home.css";
import { Row, Col } from "antd";
import Item_Data from './Data';
import { Link } from 'react-router-dom';
import Best_Selling_Item from './Bestselling';


import { Carousel } from 'antd';
const contentStyle = {
  margin: "0px",
  color: '#000066',
  lineHeight: '100px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%',
};
const Home = ({ addToCart }) => (
  <div className='home'>
    <div className='slider'>
      <Carousel autoplay>
      <div>
          <h3>
            <img src={banner_4} alt="banner 1" style={contentStyle} />
          </h3>
        </div>
        <div>
          <h3>
            <img src={welcome_banner} alt="banner 1" style={contentStyle} />
          </h3>
        </div>
        <div>
          <h3 >
            <img src={banner_2} alt="banner 2" style={contentStyle} />
          </h3>
        </div>
        <div>
          <h3 >
            <img src={banner_3} alt="banner 3" style={contentStyle} />
          </h3>
        </div>
        <div>
          <h3 >
            <img src={banner_1} alt="banner 4" style={contentStyle} />
          </h3>
        </div>
      </Carousel>
    </div>
    <div><h1 className="main-title"><span style={{ color: "var(--light-pink)" }}>Best</span> <span style={{ color: "var(--brown)" }}>Selling</span></h1>
      <div className='elements'>
        <Row gutter={16}>

          {
            Best_Selling_Item.map((item, index) => (
              <Col span={6} key={"product-" + index} id={"product-" + index}>
                <div className="item-wrp">
                  <Link to={`${item.category}/single-product?id=${encodeURIComponent(item.id)}&category=${encodeURIComponent(item.category)}&title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(item.price)}&image=${encodeURIComponent(item.image)}`}><img src={item.image} alt="item image" /></Link>
                  <h2>{item.title.slice(0, 22)}...</h2>
                  <p>{item.description.slice(0, 50)}...</p>
                  <button onClick={() => addToCart({ id: index, title: item.title, description: item.description, price: item.price, image: item.image, category: item.category })} className="item-btn">Add to cart</button>
                </div>
              </Col>
            ))
          }
        </Row></div>
      <div>
      </div>

      <h1 className="main-title"><span style={{ color: "var(--light-pink)" }}>popular</span> <span style={{ color: "var(--brown)" }}>products</span></h1>
    </div>
    <div className='pp-products'>
      <div className="category-tems-sec">
        <Row gutter={16}>

          {
            Item_Data.map((item, index) => (
              <Col span={6} key={"product-" + index} id={"product-" + index}>
                <div className="item-wrp">
                  <Link to={`${item.category}/single-product?id=${encodeURIComponent(item.id)}&category=${encodeURIComponent(item.category)}&title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(item.price)}&image=${encodeURIComponent(item.image)}`}><img src={item.image} alt="item image" /></Link>
                  <h2>{item.title.slice(0, 22)}...</h2>
                  <p>{item.description.slice(0, 50)}...</p>
                  <button onClick={() => addToCart({ id: index, title: item.title, description: item.description, price: item.price, image: item.image, category: item.category })} className="item-btn">Add to cart</button>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
 
    <br></br>
  </div>




);


export default Home;