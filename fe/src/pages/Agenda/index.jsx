import React from "react";

import Table from "../../components/Table";

export const AgendaData = () => {
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
          <a href="/event/berita" className="me-3">
            <i class="ri-newspaper-line" />
            Beria
          </a>
        </div>

        <div className="title-table">
          <i class="ri-calendar-check-fill" />
          <div>
            <h1>Data Agenda</h1>
            <span>Universitas IbnuSina</span>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};
