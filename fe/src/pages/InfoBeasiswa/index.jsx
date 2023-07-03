import React from 'react';
import Table from '../../components/Table';
import Footer from '../../container/Footer';
import Header from '../../container/Header';
// import './style.scss'

export const InfoBeasiswaData = () => {
  const columns = React.useMemo(
    () => [

      {
        Header: 'No',
        accessor: 'no',
      },
      {
        Header: 'Nama Bahasiswa',
        accessor: 'nama_bahasiswa',
      },
      {
        Header: 'Pengumunan',
        accessor: 'pengumunan',
      },
      {
        Header: 'Download',
        accessor: 'download_link',
      },
    ],
    []
  )
  const data = React.useMemo(
    () => [
      {
        no: 1,
        nama_bahasiswa: "John Doe",
        pengumunan: "Pengumuman 1",
        download_link: "Link 1",
      },
      {
        no: 2,
        nama_bahasiswa: "Jane Smith",
        pengumunan: "Pengumuman 2",
        download_link: "Link 2",
      },
      {
        no: 3,
        nama_bahasiswa: "Michael Johnson",
        pengumunan: "Pengumuman 3",
        download_link: "Link 3",
      },
      {
        no: 4,
        nama_bahasiswa: "Emily Davis",
        pengumunan: "Pengumuman 4",
        download_link: "Link 4",
      },
      {
        no: 5,
        nama_bahasiswa: "David Wilson",
        pengumunan: "Pengumuman 5",
        download_link: "Link 5",
      },
      {
        no: 6,
        nama_bahasiswa: "Sarah Anderson",
        pengumunan: "Pengumuman 6",
        download_link: "Link 6",
      },
      {
        no: 7,
        nama_bahasiswa: "Matthew Thompson",
        pengumunan: "Pengumuman 7",
        download_link: "Link 7",
      },
      {
        no: 8,
        nama_bahasiswa: "Olivia Taylor",
        pengumunan: "Pengumuman 8",
        download_link: "Link 8",
      },
      {
        no: 9,
        nama_bahasiswa: "Daniel Harris",
        pengumunan: "Pengumuman 9",
        download_link: "Link 9",
      },
      {
        no: 10,
        nama_bahasiswa: "Sophia Martinez",
        pengumunan: "Pengumuman 10",
        download_link: "Link 10",
      },
    ],
    []
  );

  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-end link-another mt-3'>
          <a href='/document/data-prestasi' className='me-3'><i className="ri-folder-open-fill" />Data Prestasi</a>
          <a href='/document/penerimaan-beasiswa'><i className="ri-git-repository-line" />Penerima Beasiswa</a>
        </div>

        <div className='title-table'>
          <i className="ri-graduation-cap-line" />
          <div>
            <h1>INFO BEASISWA</h1>
            <span>Universitas IbnuSina</span>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

const InfoBeasiswa = () => {
  const columns = React.useMemo(
    () => [

      {
        Header: 'No',
        accessor: 'no',
      },
      {
        Header: 'Nama Bahasiswa',
        accessor: 'nama_bahasiswa',
      },
      {
        Header: 'Pengumunan',
        accessor: 'pengumunan',
      },
      {
        Header: 'Download',
        accessor: 'download_link',
      },
    ],
    []
  )
  const data = React.useMemo(
    () => [
      {
        no: 1,
        nama_bahasiswa: "John Doe",
        pengumunan: "Pengumuman 1",
        download_link: "Link 1",
      },
      {
        no: 2,
        nama_bahasiswa: "Jane Smith",
        pengumunan: "Pengumuman 2",
        download_link: "Link 2",
      },
      {
        no: 3,
        nama_bahasiswa: "Michael Johnson",
        pengumunan: "Pengumuman 3",
        download_link: "Link 3",
      },
      {
        no: 4,
        nama_bahasiswa: "Emily Davis",
        pengumunan: "Pengumuman 4",
        download_link: "Link 4",
      },
      {
        no: 5,
        nama_bahasiswa: "David Wilson",
        pengumunan: "Pengumuman 5",
        download_link: "Link 5",
      },
      {
        no: 6,
        nama_bahasiswa: "Sarah Anderson",
        pengumunan: "Pengumuman 6",
        download_link: "Link 6",
      },
      {
        no: 7,
        nama_bahasiswa: "Matthew Thompson",
        pengumunan: "Pengumuman 7",
        download_link: "Link 7",
      },
      {
        no: 8,
        nama_bahasiswa: "Olivia Taylor",
        pengumunan: "Pengumuman 8",
        download_link: "Link 8",
      },
      {
        no: 9,
        nama_bahasiswa: "Daniel Harris",
        pengumunan: "Pengumuman 9",
        download_link: "Link 9",
      },
      {
        no: 10,
        nama_bahasiswa: "Sophia Martinez",
        pengumunan: "Pengumuman 10",
        download_link: "Link 10",
      },
    ],
    []
  );

  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex justify-content-end link-another mt-3'>
          <a href='/prestasi' className='me-3'><i className="ri-folder-open-fill" />Data Prestasi</a>
          <a href='/peneriman-beasiswa'><i className="ri-git-repository-line" />Penerima Beasiswa</a>
        </div>

        <div className='title-table'>
          <i className="ri-graduation-cap-line" />
          <div>
            <h1>INFO BEASISWA</h1>
            <span>Universitas IbnuSina</span>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
      <Footer />
    </>
  );
};

export default InfoBeasiswa;
