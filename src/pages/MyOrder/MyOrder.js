import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Image from 'react-bootstrap/Image'
import { Col } from 'react-bootstrap';
import OrderList from '../../components/OrderList/OrderList';
const MyOrder = () => {
    const { user } = useAuth();
    return (
        <div className="container">
            <div className="row m-4">
                <div className="col-md-2 text-center">


                    <Image src={user.photoURL} roundedCircle />
                    <h3>Name : {user.displayName}</h3>
                    <p>Email : {user.email}</p>

                </div>
                <div className="col-md-10 ">
                    <h1>MY Booking List</h1>
                    <OrderList data={user.uid}></OrderList>
                </div>
            </div>

        </div>
    );
};

export default MyOrder;