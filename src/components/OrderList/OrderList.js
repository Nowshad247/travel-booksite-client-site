import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
const OrderList = (props) => {
    const [orders, setOrders] = useState([]);
    const id = props.data;
    const url = `http://localhost:5000/my-order-list/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handelCliack = (e) => {
        const url = `http://localhost:5000/my-rder-list/${e}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = orders.filter(order => order._id !== e);
                setOrders(remaining);
                alert('order deleted')
            })
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>guist</th>
                        <th>checkin</th>
                        <th>checkout</th>
                        <th>orderStatus</th>
                        <th>Package Datials</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <th>{index}</th>
                            <th>{order.fullname}</th>
                            <th>{order.guist}</th>
                            <th>{order.checkin}</th>
                            <th>{order.checkout}</th>
                            <th className='text-danger'>{order.orderStatus}</th>
                            <th><Link as={Link} to={`/booking/${order.packageid}`}>See Package</Link></th>
                            <th><button onClick={() => { handelCliack(order._id) }}>delete</button></th>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default OrderList;