import React from 'react';
import Footer from '../../../container/Footer';
import Header from '../../../container/Header';


const BeritaDetail = () => {
  return (
    <>
      <Header />
      <div className='berita-detail'>
        <div className='container'>
          <div className='row '>
            <div className='col-12 col-sm-12 col-md-12 pb-5 pb-lg-0 col-lg-6'>
              <img src="https://picsum.photos/id/1011/800/450" alt="imageItem" />
            </div>
            <div className='col-12 col-sm-12 col-md-12 pb-5 pb-lg-0 col-lg-6 d-flex flex-column justify-content-between align-items-start'>
              <div>
                <div className='berita-tilte'>This is some title</div>
                <div className='berita-desc2 d-flex flex-column d-md-block'>
                  <span className='pe-3'><i className="ri-calendar-2-line" /> 25-jan-2023</span>
                  <span><i className="ri-pencil-line" /> Muhammad Hanjarraes</span>
                  <div>
                    <span>
                      <a href="https://www.facebook.com/sharer/sharer.php?u=https://muhammad-hanjarraes.surge.sh/" target="_blank" rel="noreferrer">
                        <i className="ri-facebook-fill" />
                      </a>
                    </span>
                    <span>
                      <a href="https://api.whatsapp.com/send?text=Check out this spannk: https://example.com" target="_blank" rel="noreferrer">
                        <i className="ri-whatsapp-fill" />
                      </a>
                    </span>
                    <span>
                      <a href="https://twitter.com/intent/tweet?url=https://example.com&text=Check out this spannk" target="_blank" rel="noreferrer">
                        <i className="ri-twitter-fill" />
                      </a>
                    </span>
                    <span>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="ri-instagram-fill" />
                      </a>
                    </span>
                  </div>
                </div>
                <div className='berita-desc'>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </div>
              </div>
              <div className='kembali-berita'>
                <a href='/berita'><i className="ri-arrow-left-s-line" /> Liat Berita Lain</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BeritaDetail;
