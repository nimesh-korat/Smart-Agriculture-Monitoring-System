import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';

function LiveStatus() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/user/getLiveData');
            setData(response.data.liveData);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0, { behavior: 'smooth' });
        fetchData();
    }, []);

    return (
        <>
            <Header />
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
                    <>
                        <div
                            className="container-fluid facts my-5 py-5"
                            data-parallax="scroll"
                            data-image-src="/img/agr1.png"
                        >
                            <div className="container py-5">
                                <div className="row g-5 wow fadeIn justify-content-center">
                                    {
                                        data.length > 0 ? data.map((sensor, index) => (
                                            <div className="col-4 wow fadeIn" key={index} data-wow-delay="0.3s">
                                                <div
                                                    className="text-center rounded py-5 px-4"
                                                    style={{ boxShadow: "0 0 45px rgba(0,0,0,.5)" }}
                                                >
                                                    <div
                                                        className="btn-square bg-light rounded-circle mx-auto mb-4"
                                                        style={{ width: 90, height: 90 }}
                                                    >
                                                        {/* Use appropriate icon for sensor */}
                                                        {sensor.sensorName === 'Flame Sensor' && <i className="fad fa-fire-smoke fa-3x text-primary" />}
                                                        {sensor.sensorName === 'Smoke Sensor' && <i className="fad fa-heat fa-3x text-primary" />}
                                                        {sensor.sensorName === 'Soil Sensor' && <i className="fad fa-dreidel fa-3x text-primary" />}
                                                        {sensor.sensorName === 'IR Sensor' && <i className="fad fa-signal-stream fa-3x text-primary" />}
                                                        {sensor.sensorName === 'Water Level Sensor' && <i className="fad fa-dewpoint fa-3x text-primary" />}
                                                        {/* Add more cases for other sensor types */}
                                                    </div>
                                                    <h4 className="mb-0">{sensor.sensorName}</h4>
                                                    <h5 className="mb-0">{sensor.sensorValue}</h5>
                                                </div>
                                            </div>
                                        )) : <h1>No Data</h1>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            <Footer />
        </>
    )
}

export default LiveStatus;
