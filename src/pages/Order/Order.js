import React from 'react';
import './Order.css'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Order = (props) => {
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://lit-bastion-18915.herokuapp.com/order', {
            packageid: id,
            userid: user.uid,
            fullname: data.name,
            guist: data.guist,
            checkin: data.checkin,
            checkout: data.checkout,
            email: data.email,
            cardnumber: data.cardnumber,
            orderStatus: "Pending Orders"
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    alert("successful ");
                    reset();
                };
            })
            .catch(function (error) {
                alert(error);
            });
        reset(data);
    };
    return (
        <div className="container">
            <div className="row justifu-content-center">
                <h1 className="text-center m-4">Place Order Page </h1>
                <div className="col-md-8 cusitom">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <fieldset disabled>
                                <input defaultValue={id} {...register("packageId")} />
                            </fieldset>
                            <p>Your Booking Package Id</p>

                        </div>
                        <div>
                            <p>Full Name</p>
                            <input defaultValue={user?.displayName} {...register("name")} />
                        </div>
                        <div>
                            <p>Number of guist</p>
                            <input type="number" defaultValue='1' {...register("guist", { min: 1, max: 5 })} />
                        </div>
                        <div>
                            <p>Check-in date</p>
                            <input type="date" {...register("checkin")} />
                        </div>
                        <div>
                            <p>Check-out date</p>
                            <input type="date" {...register("checkout")} />
                        </div>

                        <div>
                            <p>Your Email</p>
                            <input type='email' defaultValue={user?.email} {...register("email", { required: true })} />
                        </div>
                        <div>
                            <h4>Payment datails</h4>
                            <input  {...register("cardnumber", { required: true })} placeholder="Your Master Card Number" />
                        </div>
                        {errors.email && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;