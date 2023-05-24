import React from 'react';
import LogoUis from '../../assets/img/Logo/logo.png'
import LogoKampusMerdeka from '../../assets/img/Logo/logo-kampus-merdeka.png'
import './style.scss'

const Footer = () => {
  return (
    <footer className="site-footer" >
      <div className="container" >
        <div className="row" >
          <div className="col-sm-12 col-md-6" >
            <div className='d-ldex'>
              <img src={LogoUis} alt="logoUis" className='logo-footer pe-5' />
              <img src={LogoKampusMerdeka} alt="logoKampusMerdeka" className='logo-footer' />
            </div>
          </div >
          <div className="col-xs-6 col-md-3 informasi-footer">
            <h6>Informasi</h6>
            <div>
              Location :
            </div>
            <div>
              Jl. Teuku Umar, Lubuk Baja Kota, Kec. Lubuk Baja, Kota Batam, Kepulauan Riau 29444
            </div>
            <div> <i className="ri-phone-line" /> 0778-4083-113</div>
            <div><i className="ri-mail-line" /> info@uis.ac.id</div>
            <div><i className="ri-instagram-line" /><a href="https://www.instagram.com/uisbatam/">@kemahasiswaan.ubsi</a></div>
          </div >

          <div className="col-xs-6 col-md-3" >
            <h6>Quick Links</h6>
            <ul className="footer-links" >
              <li><a href="/">e-Journal Ibnusina</a></li>
              <li><a href="/">Repository Ibnusina</a></li>
              <li><a href="/">e-Learning IbnuSina</a></li>
              <li><a href="/">e-Library Ibnusina</a></li>
              <li><a href="/">Ikatan Alumni Ibnusina</a></li>
            </ul >
          </div >
        </div >
        <hr />
      </div >
      <div className="container" >
        <div className="row" >
          <div className="col-md-8 col-sm-6 col-xs-12" >
            <p className="copyright-text" > Copyright & copy; 2023 All Rights Reserved by
              < a href="/" > Muhammad Hanjarraes</a >.
            </p >
          </div >

          <div className="col-md-4 col-sm-6 col-xs-12" >
            <ul className="social-icons" >
              <li><a className="facebook" href="https://www.facebook.com/universitasibnusinabatam"><i className="ri-facebook-fill"></i></a ></li >
              <li><a className="dribbble" href="https://www.instagram.com/uisbatam/"><i className="ri-instagram-fill"></i></a ></li >
              <li><a className="linkedin" href="https://www.linkedin.com/school/universitas-ibnu-sina-btm/"><i className="ri-linkedin-box-fill"></i></a ></li >
            </ul >
          </div >
        </div >
      </div >
    </footer >
  );
};

export default Footer;
