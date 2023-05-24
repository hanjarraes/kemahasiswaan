import React from 'react';
import Table from '../../components/Table';
import Footer from '../../container/Footer';
import Header from '../../container/Header';
// import './style.scss'

const Prestasi = () => {
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
      {
        no: 3,
        nama: "Michael Johnson",
        prodi: "Psikologi",
        kampus: "Universitas PQR",
        prestasi: "Juara 3 Lomba Debat",
        kejuaraan: "Debate Tournament",
        tahun: 2023,
      },
      {
        no: 4,
        nama: "Sarah Williams",
        prodi: "Akuntansi",
        kampus: "Universitas XYZ",
        prestasi: "Juara 1 Lomba Akuntansi",
        kejuaraan: "Accounting Competition",
        tahun: 2022,
      },
      {
        no: 5,
        nama: "Robert Davis",
        prodi: "Ilmu Komunikasi",
        kampus: "Universitas ABC",
        prestasi: "Juara 2 Lomba Jurnalistik",
        kejuaraan: "Journalism Contest",
        tahun: 2021,
      },
      {
        no: 6,
        nama: "Emily Johnson",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas PQR",
        prestasi: "Juara 1 Lomba Marketing",
        kejuaraan: "Marketing Competition",
        tahun: 2023,
      },
      {
        no: 7,
        nama: "Daniel Smith",
        prodi: "Teknik Informatika",
        kampus: "Universitas XYZ",
        prestasi: "Juara 3 Lomba Coding",
        kejuaraan: "Coding Championship",
        tahun: 2022,
      },
      {
        no: 8,
        nama: "Olivia Brown",
        prodi: "Psikologi",
        kampus: "Universitas ABC",
        prestasi: "Juara 2 Lomba Psikologi",
        kejuaraan: "Psychology Competition",
        tahun: 2021,
      },
      {
        no: 9,
        nama: "William Taylor",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas XYZ",
        prestasi: "Juara 1 Lomba Kewirausahaan",
        kejuaraan: "Entrepreneurship Challenge",
        tahun: 2023,
      },
      {
        no: 10,
        nama: "Sophia Johnson",
        prodi: "Ilmu Komunikasi",
        kampus: "Universitas PQR",
        prestasi: "Juara 3 Lomba Public Speaking",
        kejuaraan: "Public Speaking Competition",
        tahun: 2022,
      },
      {
        no: 11,
        nama: "James Wilson",
        prodi: "Akuntansi",
        kampus: "Universitas ABC",
        prestasi: "Juara 2 Lomba Akuntansi",
        kejuaraan: "Accounting Competition",
        tahun: 2021,
      },
      {
        no: 12,
        nama: "Lily Davis",
        prodi: "Teknik Informatika",
        kampus: "Universitas XYZ",
        prestasi: "Juara 1 Lomba Programming",
        kejuaraan: "Programming Contest",
        tahun: 2023,
      },
      {
        no: 13,
        nama: "Benjamin Miller",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas PQR",
        prestasi: "Juara 3 Lomba Marketing",
        kejuaraan: "Marketing Competition",
        tahun: 2022,
      },
      {
        no: 14,
        nama: "Ava Wilson",
        prodi: "Psikologi",
        kampus: "Universitas ABC",
        prestasi: "Juara 2 Lomba Psikologi",
        kejuaraan: "Psychology Competition",
        tahun: 2021,
      },
      {
        no: 15,
        nama: "Josephine Taylor",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas XYZ",
        prestasi: "Juara 1 Lomba Bisnis Plan",
        kejuaraan: "Business Plan Competition",
        tahun: 2023,
      },
      {
        no: 16,
        nama: "Ethan Anderson",
        prodi: "Ilmu Komunikasi",
        kampus: "Universitas PQR",
        prestasi: "Juara 3 Lomba Debat",
        kejuaraan: "Debate Tournament",
        tahun: 2022,
      },
    ],
    []
  )

  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex justify-content-end link-another mt-3'>
          <a href='/info-beasiswa' className='me-3'><i className="ri-graduation-cap-line " />Info Beasiswa</a>
          <a href='/peneriman-beasiswa'><i className="ri-git-repository-line" />Penerima Beasiswa</a>
        </div>

        <div className='title-table'>
          <i className="ri-folder-open-fill" />
          <div>
            <h1>DATA PRESTASI</h1>
            <span>Universitas IbnuSina</span>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
      <Footer />
    </>
  );
};

export default Prestasi;
