import React from 'react';
import { useForm } from "react-hook-form";
const AddNewService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://lit-bastion-18915.herokuapp.com/add-new-services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(datas => console.log(datas))
    };
    return (
        <div className="container">
            <div className="row">
                <h1 className='text-center'>Add New Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("name")} placeholder="Package Title" />
                    <input {...register("location")} placeholder='location ' />
                    <input {...register("time")} placeholder="time" />
                    <input {...register("price")} placeholder='prices' />
                    <input {...register("description")} placeholder="Description" />
                    <input {...register("image")} placeholder="image url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewService;