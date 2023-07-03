import React from 'react';
import Table from '../../components/Table';
import Footer from '../../container/Footer';
import Header from '../../container/Header';
// import './style.scss'

export const PenerimaBeasiswaData = () => {
  const columns = React.useMemo(
    () => [

      {
        Header: 'No',
        accessor: 'no',
      },
      {
        Header: 'Nama',
        accessor: 'nama',
      },
      {
        Header: 'Prodi',
        accessor: 'prodi',
      },
      {
        Header: 'Kampus',
        accessor: 'kampus',
      },
      {
        Header: 'Prestasi',
        accessor: 'prestasi',
      },
      {
        Header: 'Kejuaraan',
        accessor: 'kejuaraan',
      },
      {
        Header: 'Tahun',
        accessor: 'tahun',
      },
    ],
    []
  )

  const data = React.useMemo(
    () => [
      {
        no: 1,
        nama: "John Doe",
        prodi: "Teknik Informatika",
        kampus: "Universitas ABC",
        prestasi: "Juara 1 Lomba Coding",
        kejuaraan: "Coding Championship",
        tahun: 2022,
      },
      {
        no: 2,
        nama: "Jane Smith",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas XYZ",
        prestasi: "Juara 2 Lomba Presentasi",
        kejuaraan: "Business Competition",
        tahun: 2021,
      },
    ],
    []
  )

  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-end link-another mt-3'>
          <a href='/document/info-mahasiswa' className='me-3'><i className=" ri-graduation-cap-line" />Info Beasiswa</a>
          <a href='/document/data-prestasi'><i className="ri-folder-open-fill" />Data Prestasi</a>
        </div>

        <div className='title-table'>
          <i className="ri-git-repository-line " />
          <div>
            <h1>PENERIMAAN BEASISWA</h1>
            <span>Universitas IbnuSina</span>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

const PenerimaBeasiswa = () => {
  const columns = React.useMemo(
    () => [

      {
        Header: 'No',
        accessor: 'no',
      },
      {
        Header: 'Nama',
        accessor: 'nama',
      },
      {
        Header: 'Prodi',
        accessor: 'prodi',
      },
      {
        Header: 'Kampus',
        accessor: 'kampus',
      },
      {
        Header: 'Prestasi',
        accessor: 'prestasi',
      },
      {
        Header: 'Kejuaraan',
        accessor: 'kejuaraan',
      },
      {
        Header: 'Tahun',
        accessor: 'tahun',
      },
    ],
    []
  )

  const data = React.useMemo(
    () => [
      {
        no: 1,
        nama: "John Doe",
        prodi: "Teknik Informatika",
        kampus: "Universitas ABC",
        prestasi: "Juara 1 Lomba Coding",
        kejuaraan: "Coding Championship",
        tahun: 2022,
      },
      {
        no: 2,
        nama: "Jane Smith",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas XYZ",
        prestasi: "Juara 2 Lomba Presentasi",
        kejuaraan: "Business Competition",
        tahun: 2021,
      },
    ],
    []
  )

  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex justify-content-end link-another mt-3'>
          <a href='/info-beasiswa' className='me-3'><i className=" ri-graduation-cap-line" />Info Beasiswa</a>
          <a href='/prestasi'><i className="ri-folder-open-fill" />Data Prestasi</a>
        </div>

        <div className='title-table'>
          <i className="ri-git-repository-line " />
          <div>
            <h1>PENERIMAAN BEASISWA</h1>
            <span>Universitas IbnuSina</span>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
      <Footer />
    </>
  );
};

export default PenerimaBeasiswa;
