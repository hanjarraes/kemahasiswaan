import React from "react";
import CardBerita from "../../components/CardBerita";
import Footer from "../../container/Footer";
import Header from "../../container/Header";
import { dataBerita } from "./serive";
import Table from "../../components/Table";


export const BeritaData = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
      },
      {
        Header: "Nama",
        accessor: "nama",
      },
      {
        Header: "Prodi",
        accessor: "prodi",
      },
      {
        Header: "Kampus",
        accessor: "kampus",
      },
      {
        Header: "Prestasi",
        accessor: "prestasi",
      },
      {
        Header: "Kejuaraan",
        accessor: "kejuaraan",
      },
      {
        Header: "Tahun",
        accessor: "tahun",
      },
    ],
    []
  );

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
        no: 2,
        nama: "Jane Smith",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas XYZ",
        prestasi: "Juara 2 Lomba Presentasi",
        kejuaraan: "Business Competition",
        tahun: 2021,
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
        no: 2,
        nama: "Jane Smith",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas XYZ",
        prestasi: "Juara 2 Lomba Presentasi",
        kejuaraan: "Business Competition",
        tahun: 2021,
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
        no: 2,
        nama: "Jane Smith",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas XYZ",
        prestasi: "Juara 2 Lomba Presentasi",
        kejuaraan: "Business Competition",
        tahun: 2021,
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
        no: 2,
        nama: "Jane Smith",
        prodi: "Manajemen Bisnis",
        kampus: "Universitas XYZ",
        prestasi: "Juara 2 Lomba Presentasi",
        kejuaraan: "Business Competition",
        tahun: 2021,
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
  );

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end link-another mt-3">
          <a href="/event/agenda" className="me-3">
            <i class="ri-calendar-check-fill" />
            Agenda
          </a>
        </div>

        <div className="title-table">
          <i class="ri-newspaper-line" />
          <div>
            <h1>Data Berita</h1>
            <span>Universitas IbnuSina</span>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

const Berita = ({ type }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="form-control input-search w-50 mt-5 mb-2">
            <i className="ri-search-line" />
            <input placeholder="Search Berita ..." />
          </div>
        </div>
        <CardBerita data={dataBerita} type={type} />
      </div>
      <Footer />
    </>
  );
};

export default Berita;
