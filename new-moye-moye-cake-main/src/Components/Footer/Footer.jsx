import React from "react";
import { Row, Col } from 'antd';
import './Footer.css';

import Logo from '../../assets/images/logo.png';
const Footer = () => {
    return(
        <>
        <div className="footer-sec">
            <Row gutter={16}>
                <Col span={8}>
                    <div className="footer-left-wrp">
                        <ul>
                            <li>
                                <span>CONTACT US :  <a href="tel:0099879796969">08352-1234</a></span>
                            </li>
                            <li>
                                <span>Gmail: 7th_wonder_jalnagar.gmail.com</span>
                            </li>
                            <li>
                                <span>Contact  Every Time Available  24/7 </span>
                            </li>
                            <li>
                                <span>7th Wonder Cake shop</span>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col span={8}>
                <div className="footer-center-wrp">
                    <img src={Logo} alt="Logo" />
                </div>
                </Col>
                <Col span={8}>
                    <div>
                        
                    </div>
                <div className="footer-right-wrp">
                
                    <ul>
                        <li> <h4>Follow us on:</h4> </li>
                    
                        <li>
                        <br></br> <br></br> <a href="https://www.instagram.com/7th_wonder_jalnagar?igsh=MWMyNHV6eG96MGR0bA=="><i class="fa-brands fa-instagram"></i></a> 
                        </li>
                        <li>
                           <br></br> <br></br>
                            <a href="https://www.instagram.com/7th_wonder_jalnagar?igsh=MWMyNHV6eG96MGR0bA=="><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                          <br></br>  <br></br>
                        <a href="https://www.instagram.com/7th_wonder_jalnagar?igsh=MWMyNHV6eG96MGR0bA=="><i class="fa-brands fa-twitter"></i></a> 
                        </li>
                    </ul>
                </div>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Footer;