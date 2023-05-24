import React from 'react';
import CardItem from '../../components/CardItem';
import Corousel from '../../components/Corousel';
import Slider from '../../components/Slider';
import Footer from '../../container/Footer';
import Header from '../../container/Header';
import VisiMisi from '../../assets/img/orang.jpg'
import ReactPlayer from 'react-player';

const Home = () => {
  const images = [
    "https://pmb.uis.ac.id/uploads/uis/imgpengumumanspmb/65.jpg",
    "https://i.ytimg.com/vi/gU87huClxgQ/maxresdefault.jpg",
    "https://ft.uis.ac.id/wp-content/uploads/2022/09/IMG_2874-1024x576.jpg"
  ];

  const CARDS = 10;
  return (
    <>
      <Header />
      <Slider images={images} />
      <div className='agenda-uis'>
        <div className='container'>
          <div className='row'>
            <div data-aos="fade-up" className='col-12 col-sm-12 col-md-12 pb-5 pb-lg-0 col-lg-6 d-flex flex-column align-items-center content-agenda'>
              <div className='title-agenda'>AGENDA TERBARU</div>
              <Corousel>
                {[...new Array(CARDS)].map((_, i) => (
                  <CardItem
                    idxidx={i}
                    type={'berita'}
                    title={'Card ' + (i + 1)}
                    dateInfo={'20-jan-2023'}
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                ))}
              </Corousel>
            </div>
            <div data-aos="fade-up" className='col-12 col-sm-12 col-md-12 pb-5 pb-lg-0 col-lg-6 d-flex flex-column align-items-center content-agenda'>
              <div className='title-agenda'>BERITA TERBARU</div>
              <Corousel>
                {[...new Array(CARDS)].map((_, i) => (
                  <CardItem
                    idx={i}
                    type={'agenda'}
                    title={'Card ' + (i + 1)}
                    dateInfo={'20-jan-2023'}
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                ))}
              </Corousel>
            </div>
          </div>

        </div>
      </div>
      <div className='visi-misi'>
        <div data-aos="fade-up" className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <span>VISI</span>
              <p>Menjadi universitas unggul, bermartabat, bereputasi nasional, dan internasional, serta berjiwa entrepreneur berbasis imtak tahun 2029.</p>

              <span>MISI</span>
              <ul>
                <li>Menyelenggarakan pendidikan, penelitian, dan pengabdian masyarakat yang unggul, bermartabat, mendapatkan reputasi yang baik di tingkat nasional dan internasional, bermanfaat bagi masyarakat.</li>
                <li>Mengembangkan keilmuan melalui kegiatan penelitian yang berkualitas nasional dan internasional.</li>
                <li>Menyelenggarakan dan meningkatkan kegiatan pengabdian kepada masyarakat di berbagai bidang keilmuan untuk dapat memberikan solusi kepada masyarakat, industri, dan pemerintah.</li>
                <li>Mengembangkan inovasi dan meningkatkan kreativitas civitas akademika berbasis imtak.</li>
                <li>Menyelenggarakan good university governance yang efisien</li>
              </ul>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <img src={VisiMisi} alt="imgVisiMisi" />
            </div>
          </div>
        </div>
      </div>
      <div className='pendaftaran'>
        <div data-aos="fade-up" className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <div className='video-youtube'>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Fty1fIe4HvY"
                  playing={true}
                  loop={true}
                  muted={true}
                />
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between'>
              <div>
                <span>Universitas Ibnusina</span>
                <p className='text-justify'>
                  Universitas Ibnu Sina merupakan salah satu lembaga pendidikan tertua di Provinsi Kepri, hasil gabungan dari tiga sekolah tinggi, yakni Sekolah Tinggi Ilmu Ekonomi (STIE), Sekolah Tinggi Teknik (STT) dan Sekolah Tinggi Ilmu Kesehatan (STIKes)
                  Universitas Ibnu Sina berkomitmen memberikan output terbaik bagi peradaban dunia melalui generasi penurus yang dilahirkan memiliki akhlak mulia dan berjiawa enterpreneur. Dua poin ini menjadi tuntutan bagaimana arah kebijakan mengarah kedua hal tersebut
                </p>
              </div>
              <div className='d-flex justify-content-between'>
                <a href='https://pmb.uis.ac.id/jalur-seleksi' className='btn'>Join Now</a>
                <a href='/' className='btn'>Download Sertifikat</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
