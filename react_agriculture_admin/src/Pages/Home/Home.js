import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import { CDBDataTable } from "cdbreact";
import axios from "axios";
import Counts from "./Counts";

function Home() {
  const [isLoaded, setLoaded] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    try {
      axios.post("http://localhost:8000/api/admin/getUser")
      .then((response) => {
        setDatas(response.data.userData);
      })
      .then(() => setLoaded(true));
    } catch (error) {
      console.log(error);
    }
    
   
  }, []);

  return (
    <>
      {/* Left Panel */}
      <aside id="left-panel" className="left-panel">
        <SideBar />
      </aside>
      {/* /#left-panel */}
      {/* Right Panel */}
      <div id="right-panel" className="right-panel">
        {/* Header*/}
        <Header />
        {/* /#header */}
        {/* Content */}
        <div className="content">
          {/* Widgets  */}
          <div className="row">
            <Counts />
          </div>
          {/* /Widgets */}
          {/* order */}
          <div className="orders">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="box-title">Users </h4>
                  </div>
                  <div className="card-body">
                    <div className="table-stats order-table ov-h">
                      { }
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
                              { label: "ID", field: "Id" },
                              { label: "Name", field: "Name" },
                              { label: "Email", field: "email" },
                              { label: "Phone No", field: "phoneNo" },
                            ],
                            rows: datas.map((data) => ({
                              Id: data._id,
                              Name: data.username,
                              email: data.email,
                              phoneNo: data.phoneNo,
                            })),
                          }}
                        />
                      ) : (
                        <h3> &nbsp; Please Wait...</h3>
                      )}
                    </div>
                    {/* /.table-stats */}
                  </div>
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
          {/*/. order */}
        </div>
      </div>
    </>
  );
}

export default Home;
