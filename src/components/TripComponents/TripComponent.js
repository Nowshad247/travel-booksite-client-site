import React from 'react';

const TripComponent = (props) => {
    const trip = props.data;
    return (
        <div className="col-md-3 col-sm-3 m-4">
            <div className='trip-card'>
                <img className="img-fluid" src={trip.image} alt="" />
                <div>
                    <h3>{trip.tripLocation}</h3>
                    <p>{trip.timeLine}</p>
                </div>
            </div>
        </div>
    );
};

export default TripComponent;