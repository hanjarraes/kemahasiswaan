import React from 'react';
import CardBerita from '../../components/CardBerita';
import Footer from '../../container/Footer';
import Header from '../../container/Header';

const dataBerita = [
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
]


const Berita = ({ type }) => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <div className='form-control input-search w-50 mt-5 mb-2'>
            <i className="ri-search-line" />
            <input placeholder='Search Berita ...' />
          </div>
        </div>
        <CardBerita data={dataBerita} type={type} />
      </div>
      <Footer />
    </>
  );
};

export default Berita;
