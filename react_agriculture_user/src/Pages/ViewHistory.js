import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function ViewHistory() {
  const [records, setRecords] = useState([]);
  const [sensorName, setSensorName] = useState("flameSensorData");
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/user/getHistoryData");
      setRecords(response.data.data);
      setOriginalData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const column = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Sensor Value",
      selector: (row) => row.sensorValue,
      sortable: true,
    },
    {
      name: "Date & Time",
      selector: (row) => new Date(row.timestamp).toLocaleString(),
      sortable: true,
    },
  ];

  const handleFilter = (event) => {
    const filterValue = event.target.value.toLowerCase();
    if (filterValue === "") {
      setRecords(originalData);
    } else {
      const newData = originalData[sensorName].filter((row) =>
        Object.entries(row).some(([key, value]) =>
          key === "timestamp" ?
            new Date(value).toLocaleString().toLowerCase().includes(filterValue) :
            String(value).toLowerCase().includes(filterValue)
        )
      );
      setRecords({ ...originalData, [sensorName]: newData });
    }
  };


  return (
    <>
      <Header />
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">History</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                History Data
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {
        loading ? (
          <div
            id="spinner"
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          >
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
        ) : (
          <div className="container-xxl py-5">
            <select
              className="form-select w-25 mb-3 shadow rounded"
              onChange={(e) => setSensorName(e.target.value)}
            >
              <option value="flameSensorData">Flame Sensor</option>
              <option value="smokeSensorData">Smoke Sensor</option>
              <option value="soilSensorData">Soil Sensor</option>
              <option value="irSensorData">IR Sensor</option>
              <option value="waterLevelData">Water Level Sensor</option>
            </select>
            <input
              className="form-control w-25 mb-3 shadow rounded"
              type="text"
              placeholder="Search"
              onChange={handleFilter}
            />
            <div className="shadow rounded">
              <DataTable
                className="table mb-0"
                highlightOnHover
                striped
                columns={column}
                data={records[sensorName]}
                pagination
              ></DataTable>
            </div>
          </div>
        )
      }
      <Footer />
    </>
  );
}

export default ViewHistory;
