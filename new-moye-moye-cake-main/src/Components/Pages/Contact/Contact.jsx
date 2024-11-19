import React, { useState } from 'react';
import './Contact.css';
import Contact_img from '../../../assets/images/contact-img.jpg';
import { Row, Col } from 'antd';
import axios from 'axios';

const Contact = () => {
 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/submitForm', formData);
      console.log("Api error"+response.data);  
     
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, you can show an error message to the user
    }
  };
 

    return(
        <>
        <div className="contact-sec">
          <Row gutter={16}>
            <Col span={12}>
            <div className="contact-form">
                <h2>Contact Us</h2>
                  <form onSubmit={handleSubmit}>
                    <p>
                      <span><i class="fa-solid fa-user"></i></span>
                      <input type="text" name="name" value={formData.name} onChange={handleChange}  placeholder="Name" />
                    </p>
                    <p>
                      <span><i class="fa-regular fa-envelope"></i></span>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    </p>
                    <p>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
                    </p>
                    <p class="btn-wrp">
                    <button type="submit" className="submit-btn">Submit</button>
                     
                    </p>
                  </form>
                </div>
            </Col>
<Col span={12}>
                <div className="contact-img-wrp">
                  <img src={Contact_img} alt="contact img" />
          </div>
          </Col>
          </Row>
        </div> 
       
        </>
    )
}

export default Contact;