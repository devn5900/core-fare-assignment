import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillGoogleCircle,AiFillInstagram,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import { footer } from '../utils/data'
import FooterChild from './FooterChild'
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Our social accounts : </span>
        </div>
    
        <div>
          <a href="" className="me-4  fs-5 text-reset">
            <BsFacebook/>
          </a>
          <a href="" className="me-4 fs-5 text-reset">
            <AiFillTwitterCircle />
          </a>
          <a href="" className="me-4 fs-5 text-reset">
           <AiFillGoogleCircle/>
          </a>
          <a href="" className="me-4 fs-5 text-reset">
            <AiFillInstagram/>
          </a>
          <a href="" className="me-4 fs-5 text-reset">
            <AiFillLinkedin />
          </a>
          <a href="" className="me-4 fs-5 text-reset">
            <AiFillGithub/>
          </a>
        </div>
      </section>
    
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Core Fare
              </h6>
              <p>
              CoreFares Consulting specializes in providing best in class Global Air Fares for Business, Leisure and Group Travel to Travel Management Companies, Tour Operators and Online Travel Agencies. We have access to Global Inventory directly from major airlines, consolidators and aggregators thus enabling us to provide a fare advantage from all Global Airlines including Low Cost Carriers to our customers.
              </p>
            </div>
    
          
    {
        footer&&footer.length>0&&footer.map((el)=>{
            return <FooterChild data={el} />
        })
    }
           
    
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New Delhi, India</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                demo@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +91 0054558554</p>
            </div>
          </div>
        </div>
      </section>
    
      <div className="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.05);"}}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  )
}

export default Footer