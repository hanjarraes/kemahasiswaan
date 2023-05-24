import React, { useState } from 'react';
import LogoUis from '../../assets/img/Logo/logo.png'
import { Modal, ModalBody, } from 'reactstrap';

import './style.scss'

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isBeasiswa, setIsBeasiswa] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <header id="header">
      <div className='container'>
        <a className="site-logo" href="/">
          <img src={LogoUis} alt="logoUis" className='logo-header' />
          <div className='text-logo'>
            <div>KEMAHASISWAAN</div>
            <div>Universitas IbnuSina</div>
          </div>
        </a>
        <div onClick={toggle} className='d-flex d-md-none align-items-center burger-menu'>
          <i className="ri-menu-line" />
        </div>
        <nav role="navigation" id="nav-main" className="navigation-main d-none d-md-flex">
          <a href="/">HOME</a>
          <a href="/">ORMAWA</a>
          <a href="/prestasi">PRESTASI</a>
          <div className='dropdown-nav' onClick={() => setIsBeasiswa(!isBeasiswa)}>BEASISWA
            {isBeasiswa ? <div className='nav-open'>
              <a href="/info-beasiswa">INFO</a>
              <a href="/peneriman-beasiswa">PENERIMAN</a>
            </div> : ''}
          </div>
          <div className='dropdown-nav' onClick={() => setIsShow(!isShow)}>LAINNYA
            {isShow ? <div className='nav-open'>
              <a href="/berita">BERITA</a>
              <a href="/galery">GALLERY</a>
              <a href="/agenda">AGENDA</a>
              <a href="/">DOWNLOAD</a>
            </div> : ''}
          </div>
          <a href="/login">STAF</a>
        </nav>
      </div>
      {isBeasiswa ?
        <label
          className="closeLabel"
          htmlFor={`select-opener`}
          onClick={() => setIsBeasiswa(false)}
          aria-hidden="true"
        />
        : ''}
      {isShow ?
        <label
          className="closeLabel"
          htmlFor={`select-opener`}
          onClick={() => setIsShow(false)}
          aria-hidden="true"
        />
        : ''}
      <Modal isOpen={modal} toggle={toggle} className="fullscreen-modal">
        <ModalBody>
          <i className="ri-close-line" onClick={toggle} />
          <nav role="navigation" id="nav-main" className="navigation-main">
            <a href="/">HOME</a>
            <a href="/">ORMAWA</a>
            <a href="/prestasi">PRESTASI</a>
            <div className='dropdown-nav' onClick={() => setIsBeasiswa(!isBeasiswa)}>BEASISWA</div>
            {isBeasiswa ? <>
              <a href="/info-beasiswa">INFO</a>
              <a href="/peneriman-beasiswa">PENERIMAN</a>
            </> : ''}
            <div className='dropdown-nav' onClick={() => setIsShow(!isShow)}>LAINNYA</div>
            {isShow ? <>
              <a href="/berita">BERITA</a>
              <a href="/galery">GALLERY</a>
              <a href="/agenda">AGENDA</a>
              <a href="/">DOWNLOAD</a>
            </> : ''}
            <a href="/login">STAF</a>
          </nav>
        </ModalBody>
      </Modal>
    </header >
  );
};

export default Header;
