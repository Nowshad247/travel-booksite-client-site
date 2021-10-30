import React from 'react';
import { useParams } from 'react-router';
import { FcCurrencyExchange } from "react-icons/fc";
import { FaLocationArrow, FaStarOfDavid, FaPlusSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Booking = (props) => {
    const { id } = useParams();
    const [packages, setPackages] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/package-details/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 p-4">
                    <div className="row bg-card">
                        <div className="col-md-4 col-lg-4 col-4 text-center custom-image">
                            <img src={packages.image} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-6 col-lg-6 col-6">
                            <h3>{packages.name}</h3>
                            <h5>{packages.price} Tk</h5>
                            <p>Location : {packages.location}</p>
                            <p><FaStarOfDavid /> Time : {packages.time}</p>
                            <p>{packages?.description}</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-2">
                            <p> <FcCurrencyExchange /> {packages.price} tk</p>
                            <p><FaLocationArrow />  address</p>
                            <Link to={`/place-order/${packages._id}`}>
                                <Button variant="primary" className='btn btn-custom-book' >Place Order For Booking</Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;