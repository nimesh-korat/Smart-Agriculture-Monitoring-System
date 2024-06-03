import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Counts() {
    const [isLoaded, setLoaded] = useState(false);
    const [counts, setCounts] = useState([]);

    useEffect(() => {
        try {
            axios.get("http://localhost:8000/api/admin/getAllCounts")
            .then((response) => {
                setCounts(response.data);
            }).then(() => setLoaded(true));
        } catch (error) {
            console.log(error);
        }
        
    }, []);

    return (
        <>
            {
                isLoaded ? (<>

                    <div className="col-lg-4 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-1">
                                        <i className="fa-solid fa-triangle-exclamation" />
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text">
                                                <span className="count">{counts.totalAlerts}</span>
                                            </div>
                                            <div className="stat-heading">Total Alert</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-3">
                                        <i className="fa-solid fa-house-laptop" />
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text">
                                                <span className="count">{counts.totalDevices}</span>
                                            </div>
                                            <div className="stat-heading">Total Device</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-4">
                                        <i className="fa-solid fa-users" />
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text">
                                                <span className="count">{counts.userCount}</span>
                                            </div>
                                            <div className="stat-heading">User</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></>
                ) : null
            }

        </>
    )
}

export default Counts