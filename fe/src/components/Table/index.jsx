import React, { useState } from "react";
import * as XLSX from "xlsx";
import './style.scss';

const Table = ({ columns, data }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const itemsPerPage = 10;

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearch = (e) => {
    setCurrentPage(1);
    setSearchValue(e.target.value);
  };

  const sortedData = sortColumn
    ? [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    })
    : data;

  const filteredData = searchValue
    ? sortedData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    )
    : sortedData;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <>
      <div className="row mt-4 mb-2 d-flex align-items-center">
        <div className="col-12 col-md-6">
          <div className='form-control input-search d-flex'>
            <i className="ri-search-line" />
            <input
              placeholder='Search...'
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end">
          <button className="btn btn-custom px-3">
            <i className="ri-equalizer-line" />
          </button>
        </div>
      </div>
      <div className="overflow-auto " style={{ maxWidth: "100vw", minHeight: "55vh" }}>
        <table className="table table-striped table-custom">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  onClick={() => handleSort(column.accessor)}
                  style={{
                    cursor: "pointer",
                    borderTop: sortColumn === column.accessor ? (sortDirection === "asc" ? "2px solid #497659" : "none") : "",
                    borderBottom: sortColumn === column.accessor ? (sortDirection === "asc" ? "none" : "2px solid #497659") : "",
                    color: sortColumn === column.accessor ? '#497659' : ''
                  }}
                >
                  {column.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                {columns?.map((column) => {
                  console.log(column.accessor)
                  if (column.accessor === 'download_link') {
                    return <td key={`${column.accessor}-${index}`}><i className="ri-download-2-line" /></td>
                  }
                  return <td key={`${column.accessor}-${index}`}>{item[column.accessor]}</td>
                }
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <ul className="paging-box d-flex p-0">
            <li
              className={`paging-arrow`}
              onClick={() => paginate(1)}
              disabled={currentPage === 1}
            >
              <i className="ri-skip-back-line" />
            </li>
            <li
              className={`paging-arrow`}
              onClick={() => {
                if (currentPage === 1) {
                } else {
                  paginate(currentPage - 1)
                }
              }}
            >
              <i className="ri-arrow-left-s-line" />
            </li>

            <li className="paging-number-total">
              <input
                type="text"
                className="paging-number-active"
                maxLength={4}
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
              />
              <div className="paging-number-of">of</div>
              <div className="paging-total-result">{totalPages}</div>
            </li>
            <li
              className={`paging-arrow`}
              onClick={() => {
                if (currentPage === totalPages) {
                } else {
                  paginate(currentPage + 1)
                }
              }}
            >
              <i className="ri-arrow-right-s-line" />
            </li>
            <li
              className={`paging-arrow`}
              onClick={() => {
                if (currentPage === totalPages) {
                } else {
                  paginate(currentPage + 1)
                }
              }}
            >
              <i className="ri-skip-forward-line" />
            </li>
          </ul>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <button className="btn btn-custom" onClick={exportToExcel}>
            <span className="d-none d-md-block">Export Excel</span>
            <i className="ri-file-excel-2-line d-block d-md-none" />
          </button>
          {/* <button className="btn btn-custom">Export Pdf</button> */}
        </div>
      </div>
    </>
  );
};

export default Table;
