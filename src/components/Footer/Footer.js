import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center m-4">
                <div className="col-md-6 ">
                    <img src={logo} alt="" className='rounded' />
                    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula</p>
                </div>
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/my-profile"><AiOutlineArrowRight /> User Profile-Private Route</Link></li>

                    </ul>

                </div>
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/my-profile"><AiOutlineArrowRight /> User Profile-Private Route</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <p>All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;