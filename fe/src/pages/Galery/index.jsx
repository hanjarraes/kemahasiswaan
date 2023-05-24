import React from 'react';
import Footer from '../../container/Footer';
import Header from '../../container/Header';
import './style.scss'

const dataGalery = [
  {
    img: 'https://picsum.photos/id/1011/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/1005/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/103/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/1011/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/1005/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/103/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/1011/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/1005/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/103/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/1011/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/1005/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/103/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/1005/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
  {
    img: 'https://picsum.photos/id/103/800/450',
    title: 'This is some title',
    desc: 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.'
  },
]

const Galery = () => {
  return (
    <>
      <Header />
      <div className="scene container">
        {dataGalery.map(data => {
          return (
            <label className="card-galery-wrap" data-aos="fade-up" >
              <input type="checkbox" className="flipcard-galery" />
              <div className="card-galery">
                <div className="front card-galery-face">
                  <img src={data.img} alt="" className="card-galery-photo" />
                </div>
                <div className="back card-galery-face">
                  <p>{data.desc}</p>
                </div>
              </div>
            </label>
          )
        })}
      </div>
      <Footer />
    </>
  );
};

export default Galery;
