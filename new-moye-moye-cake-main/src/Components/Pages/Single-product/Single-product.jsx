import React, { useEffect, useState } from "react";
import { Row, Col, Carousel  } from "antd";
import { Link } from 'react-router-dom';
import './Single-product.css';
import { useLocation } from "react-router-dom";

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Single_Product = ({ addToCart, cart, removeFromCart }) => {
const onChange = (currentSlide: number) => {
    console.log(currentSlide);
};
    const location = useLocation();
    const [category, setCategory] = useState(null);
    const [id, setId ] = useState(null);
    const [image_url, setImageurl] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice ] = useState(null); 

    useEffect(() => {
        const param = new URLSearchParams(location.search);
        const category = param.get('category');
        const id = param.get('id');
        const image_url = param.get('image');
        const title = param.get('title');
        const descricption = param.get('description');
        const price = param.get('price');

        setCategory(category);
        setId(id);
        setImageurl(image_url);
        setTitle(title);
        setDescription(descricption);
        setPrice(price);

    }, [location.search]);

    return(
        <>
        <div className="single-product">
            <Row gutter={24}>
                <Col span={12}>
                    <div className="back-btn">
                    <Link to={`../${category}`}>Back</Link>
                    </div>
                    <div className="product-image">
                    <Carousel afterChange={onChange}>
                        <div>
                           <img src={image_url} alt="product image" />
                        </div>
                        <div>
                           <img src={image_url} alt="product image" />
                        </div>
                        <div>
                           <img src={image_url} alt="product image" />
                        </div>
                        <div>
                           <img src={image_url} alt="product image" />
                        </div>
                        <div>
                           <img src={image_url} alt="product image" />
                        </div>
                    </Carousel>
                        
                    </div>
                    <div className="quantity-wrp">
                        <span>QTY</span>
                        <span className="qty-inp"><input type="number" /></span>
                        <span>KG</span>
                    </div>
                    <div className="note-wrp">
                        <p>ANY SPECIAL NOTE FOR SPECIAL ONES</p>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="product-cont-wrp">
                        <h2 className="product-title">{title}</h2>
                        <p className="category-title"><span>Category:</span> {category}</p>
                        <p className="product-descr">{description}</p>
                        <div className="price-wrp">
                            <p className="product-price">Price : ₹{price}/{category == "all-flavours" ? 'kg' : 'LTR'}</p>
                        </div>
                        <p><button className="product-btn" onClick={() => addToCart({id: id, title: title, description: description, price: price, image: image_url, category:category})}>Add to cart</button></p>
                        <p><Link to={`checkout?id=${encodeURIComponent(id)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image_url)}`} className="product-btn">Buy Now</Link></p>
                    </div>
                </Col>
            </Row>
        </div>
       
        </>
    )
}

export default Single_Product;