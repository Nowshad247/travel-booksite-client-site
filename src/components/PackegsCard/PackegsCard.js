import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PackegsCard = (props) => {
    const data = props.data;
    return (
        <div className="col-md-4">
            <Card className="m-4">
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data?.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted d-flex justify-content-between">
                        <Card.Link as={Link} to={`/booking/${data._id}`}>Book Now</Card.Link>
                        <p>TK {data?.price}</p>

                    </small>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default PackegsCard;