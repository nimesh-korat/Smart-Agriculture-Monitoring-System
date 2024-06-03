import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import { CDBDataTable } from "cdbreact";
import axios from "axios";
import { Link } from "react-router-dom";

function SmokeSensor() {
  const [isLoaded, setLoaded] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {

   try {
    axios.get('http://localhost:8000/api/admin/getSmokeData').then((response) => {
      setDatas(response.data.sensorData)
    }).then(() => setLoaded(true));
   } catch (error) {
    console.log(error);
   }


  }, []);

  return (
    <>
      <div>
        <aside id="left-panel" className="left-panel">
          <SideBar />
        </aside>
        {/* Left Panel */}
        {/* Right Panel */}
        <div id="right-panel" className="right-panel">
          {/* Header*/}
          <Header />
          {/* Header*/}
          <div className="breadcrumbs">
            <div className="breadcrumbs-inner">
              <div className="row m-0">
                <div className="col-sm-4">
                  <div className="page-header float-left">
                    <div className="page-title">
                      <h1>Smoke Sensor Data</h1>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="page-header float-right">
                    <div className="page-title">
                      <ol className="breadcrumb text-right">
                        <li>
                          <Link to="/">Dashboard</Link>
                        </li>
                        {/* <li><a href="#">Table</a></li> */}
                        <li className="active">Soil table</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="animated fadeIn">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <strong className="card-title">Smoke Table</strong>
                    </div>
                    <div className="card-body">
                    {isLoaded ? (
                      <CDBDataTable
                        striped
                        bordered
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={{
                          columns: [
                            { label: "Device ID", field: "deviceId" },
                            { label: "Sensor Value", field: "sensorValue" },
                            { label: "Reading Time", field: "timestamp" },
                          ],
                          rows: datas.map((data) => ({
                            deviceId: data.deviceId,
                            sensorValue: data.sensorValue,
                            timestamp: new Date(data.timestamp).toLocaleString(),
                          })),
                        }}
                      />
                    ) : (
                      <h3>Please Wait...</h3>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* .animated */}
          </div>
          {/* .content */}
          <div className="clearfix" />
          <footer className="site-footer">
            <div className="footer-inner bg-white">
              <div className="row">
                <div className="col-sm-6">Copyright © 2018 Ela Admin</div>
                <div className="col-sm-6 text-right">
                  Designed by <a href="https://colorlib.com">Colorlib</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* /#right-panel */}
        {/* Right Panel */}
        {/* Scripts */}
      </div>
    </>
  );
}

export default SmokeSensor;
