import React, { useEffect, useState } from 'react';
import { ButtonGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AllOrders = () => {

    const [status, setStatus] = useState([]);
    const [orders, setOrders] = useState([]);
    const [clickid, setClickid] = useState([]);
    useEffect(() => {
        fetch('https://lit-bastion-18915.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)

            })
    }, [])
    const handelCliack = (e) => {
        const url = `https://lit-bastion-18915.herokuapp.com/my-rder-list/${e}`;
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
    const handleChange = (event) => {
        setStatus(event.target.value);
    }
    const handelCliackid = (e) => {
        setClickid(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { clickid, status };
        const url = `https://lit-bastion-18915.herokuapp.com/all-orderss/${clickid}/${status}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("succesful")
                window.location.reload();
            })

    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center'>All Booking Orders</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>guist</th>
                                <th>checkin</th>
                                <th>checkout</th>
                                <th>orderStatus</th>
                                <th>Chenge Status</th>
                                <th>Package Datials</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr key={order._id}>
                                    <td>{index}</td>
                                    <th>{order.fullname}</th>
                                    <th>{order.guist}</th>
                                    <th>{order.checkin}</th>
                                    <th>{order.checkout}</th>
                                    <th className='text-danger'>{order.orderStatus}</th>
                                    <th>
                                        <form onSubmit={handleSubmit}>
                                            <select onChange={handleChange}>
                                                <option >Set Status</option>
                                                <option value="pending">Pending Orders</option>
                                                <option value="Approve">Approve</option>
                                            </select>
                                            <button type="submit" onClick={() => { handelCliackid(order._id) }}>Submit</button>
                                        </form>
                                    </th>
                                    <th><Link as={Link} to={`/booking/${order.packageid}`}>See Package</Link></th>
                                    <th><button onClick={() => { handelCliack(order._id) }}>delete</button></th>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    );
};

export default AllOrders;