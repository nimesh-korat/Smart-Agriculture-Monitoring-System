import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { CDBDataTable } from "cdbreact";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";

function ViewComplaint() {
    const [isLoaded, setLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {

        try {
            axios.get('http://localhost:8000/api/admin/getComplaint').then((response) => {
                setDatas(response.data.complaint.reverse())
            }).then(() => setLoaded(true));
        } catch (error) {
            console.log(error);
        }


    }, []);

    return (
        <>
            <div>
                {/* Left Panel */}
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
                                            <h1>Complaint Data</h1>
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
                                                {/* <li><a href="/#">Table</a></li> */}
                                                <li className="active">Complaint</li>
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
                                            <strong className="card-title">Complaint Table</strong>
                                        </div>
                                        <div className="card-body">
                                            {isLoaded ? (
                                                <CDBDataTable
                                                    striped
                                                    bordered
                                                    hover
                                                    entriesOptions={[5, 10, 15]}
                                                    entries={5}
                                                    pagesAmount={4}
                                                    data={{
                                                        columns: [
                                                            { label: "Name", field: "name" },
                                                            { label: "Subject", field: "subject" },
                                                            { label: "Complaint", field: "complaint" },
                                                            { label: "Date & Time", field: "timestamp" },
                                                        ],
                                                        rows: datas.map((data) => ({
                                                            name: data.name,
                                                            subject: data.subject,
                                                            complaint: data.complaint,
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

export default ViewComplaint