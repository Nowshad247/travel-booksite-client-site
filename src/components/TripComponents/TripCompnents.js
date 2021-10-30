import React, { useEffect, useState } from 'react';
import TripComponent from './TripComponent';

const TripCompnents = () => {
    const [trips, settrip] = useState([]);
    useEffect(() => {
        fetch('https://lit-bastion-18915.herokuapp.com/trip')
            .then(res => res.json())
            .then(data => settrip(data))
    }, [])
    return (
        <>
            {
                trips.map(trip => <TripComponent data={trip}></TripComponent>)
            }
        </>
    );
};

export default TripCompnents;