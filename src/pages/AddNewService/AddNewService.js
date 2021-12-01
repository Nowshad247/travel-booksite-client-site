import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
const AddNewService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        fetch('https://lit-bastion-18915.herokuapp.com/add-new-services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(datas => {
                history.push("/home");
            })
    };
    return (
        <div className="container">
            <div className="row">
                <h1 className='text-center'>Add New Service</h1>
                <div className="col-md-12 text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="m-4"  {...register("name")} placeholder="Package Title" />
                        <input className="m-4" {...register("location")} placeholder='location ' />
                        <input className="m-4" {...register("time")} placeholder="time" />
                        <input className="m-4" {...register("price")} placeholder='prices' />
                        <textarea className="m-4" {...register("description")} placeholder="Description" />
                        <input className="m-4" {...register("image")} placeholder="image url" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewService;