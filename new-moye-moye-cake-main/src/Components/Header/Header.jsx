import React, { useState } from 'react';
import { Col, Row } from 'antd';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Header = ({ cart, products }) => {
    const [isActive, setIsActive] = useState(false);

const handleClick = () => {
    setIsActive(!isActive);
};


const [searchTerm, setSearchTerm] = useState('');
    const [matchedProduct, setMatchedProduct] = useState(null);
const [notfound, setnotfound] = useState(null);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        if(searchTerm === ""){
            setMatchedProduct();
        }
        // Find the first product that matches the search term
        const product = products.find(product =>
            product.title && product.title.toLowerCase().includes(value.toLowerCase())
        );

        if (value === "") {
            setMatchedProduct(null);
            setnotfound(null);
        } else if (product) {
            setMatchedProduct(product);
            setnotfound(null);
        } else {
            setMatchedProduct(null);
            setnotfound("No Product Found");
        }
        if(notfound){
            withReactContent(Swal).fire({
                title: "Oops",
                text: notfound,
                icon: "warning"
                })
        }
    };

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    const cartPage = () => {
        const cart_items = cart.length;
        if(cart_items === 0){
           // alert("Please add the product to the cart!");
            withReactContent(Swal).fire({
            title: "Oops",
            text: "Your cart is empty please add the product and try again!",
            icon: "warning"
            })
        }
    }
    return(
        <>
        <div className="header-sec">
            <Row gutter={24}>
            
                <Col span={10}>
                    <div className={`hamburger-menu-wrp ${isMenuOpen ? 'menu-active' : ''}`}>
                    <button className='close-menu ' onClick={toggleMenu}><i class="fa-solid fa-xmark"></i></button>
                    <div className="header-left-wrp">
                    
                         <img src={Logo} alt="Logo" className='mobile-verion'/> 
                    
                        <ul className='menu-wrp'>
                            <li>
                                <NavLink exact to="/" className={isActive ? "active" : ""}>Home</NavLink> {/* Use NavLink */}
                            </li>
                            <li>
                                <NavLink to="/about" className={isActive ? "active" : ""}>About</NavLink> {/* Use NavLink */}
                            </li>
                            <li>
                                <NavLink to="/contact" className={isActive ? "active" : ""}>Contact</NavLink> {/* Use NavLink */}
                            </li>
                            <li className="category">
                                <NavLink to="">Category</NavLink> {/* Use NavLink */}
                                <ul className="sub-category">
                                    {/*<li>
                                        <NavLink to="/best-seller" className={isActive ? "active" : ""}>Best Seller</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/popular-item" className={isActive ? "active" : ""}>Popular Item</NavLink>
                                    </li>
                                     */}
                                    <li>
                                        <NavLink to="/all-flavours" className={isActive ? "active" : ""}>All Flavours</NavLink> {/* Use NavLink */}
                                    </li>
                                    <li>
                                        <NavLink to="/cold-hot-drinks" className={isActive ? "active" : ""}>Cold & Hot Drinks</NavLink> {/* Use NavLink */}
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to={cart.length === 0 ? '' : "/cart"} className={isActive ? "active" : ""} onClick={cartPage}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className='cart-count'>{cart.length}</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className='search-wrp mobile-verion'>
                        <button className="open-menu" onClick={toggleMenu}>
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                    </div>
                </Col>
                <Col span={4}>
                    <div className="header-left-wrp">
                        <div className='logo-wrp'><img src={Logo} alt=""/></div>
                    </div>
                </Col>
                <Col span={5}>
                    <div className='search-wrp desktop-version'>
                    <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                    </div>
                </Col>
                <Col span={5}>
                    <div className="header-left-wrp btn-wrp">
                        <NavLink to="/login" className='primary-btn'>Login / Signup</NavLink> {/* Use NavLink */}
                    </div>
                </Col>
            </Row>
             <div className='searchproduct-wrp'>
                <ul>
                    
            {matchedProduct && (
                <li>
                    <span><img src={matchedProduct.image} alt={matchedProduct.title} /></span>
                    <span className='search-cont'>
                    <Link to={`${matchedProduct.category}/single-product/?id=${encodeURIComponent(matchedProduct.id)}&category=${encodeURIComponent(matchedProduct.category)}&title=${encodeURIComponent(matchedProduct.title)}&description=${encodeURIComponent(matchedProduct.description)}&price=${encodeURIComponent(matchedProduct.price)}&image=${encodeURIComponent(matchedProduct.image)}`}><h2>{matchedProduct.title}</h2></Link>
                    <p><Link to={`${matchedProduct.category}`}>{matchedProduct.category}</Link></p>
                    <p>{matchedProduct.description.slice(0, 50)}..</p>
                    </span>
                    
                </li>
            )}
           
            </ul>
            </div> 
        </div>
        </>
    )
}

export default Header;
