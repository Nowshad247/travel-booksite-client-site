import React from 'react';
import { useState } from 'react';
import { Carousel, Button, CardGroup, Card } from 'react-bootstrap';
import banenr1 from './img/1.png'
import banenr2 from './img/2.png'
import banenr3 from './img/3.png';
import './Home.css';
const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className='container'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banenr1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banenr2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banenr3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container">
                <div className="row m-5">
                    <div className="col-md-12 col-sm-12 mt-4 mb-4">
                        <div className="d-flex flex-column justify-content-center text-center">
                            <h1>SEE DESTINATIONS</h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className='box-input'>
                            <p>Region</p>
                            <input type="text" placeholder='Region' />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className='box-input'>
                            <p>Duration</p>
                            <input type="number" placeholder="Duration" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className='box-input'>
                            <p>Date</p>
                            <input type="date" placeholder='Pick a date' data-date-format="mm/dd/yyyy" className="datepicker form-control hasDatepicker " />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className='box-input'>
                            <p>Button</p>
                            <Button variant="success">Book Now</Button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="d-flex flex-column justify-content-center text-center">
                            <h1>Most Popular Adventure Packages</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tempor mauris, nec <br />
                                imperdiet mi rutrum eget. Donec quis ligula in tellus dictum consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <CardGroup>
                        <div className="col-md-4">
                            <Card className="m-4">
                                <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2017/05/images-1-345x194.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="m-4">
                                <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2017/05/images-1-345x194.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="m-4">
                                <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2017/05/images-1-345x194.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="m-4">
                                <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2017/05/images-1-345x194.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="m-4">
                                <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2017/05/images-1-345x194.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="m-4">
                                <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2017/05/images-1-345x194.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </div>
                    </CardGroup>
                </div>
            </section>
            <section className='container'>
                <div className="row">
                    <div className="col-md-12 col-sm-12 ">
                        <div className="d-flex flex-column justify-content-center text-center">
                            <h1>Plan your perfect trip
                            </h1>
                            <p>Search Flights, Hotels & Car Hire to our most popular destinations
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-3 m-4">
                        <div className='trip-card'>
                            <img className="img-fluid" src="https://content.skyscnr.com/821cdb57a8248d673fcd9ccffe341de4/GettyImages-164155577.jpg?crop=100px:100px&quality=90" alt="" />
                            <div>
                                <h3>Bangkok</h3>
                                <p>Flight * Hotels * Car Hire</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 m-4">
                        <div className='trip-card'>
                            <img className="img-fluid" src="https://content.skyscnr.com/821cdb57a8248d673fcd9ccffe341de4/GettyImages-164155577.jpg?crop=100px:100px&quality=90" alt="" />
                            <div>
                                <h3>Bangkok</h3>
                                <p>Flight * Hotels * Car Hire</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 m-4">
                        <div className='trip-card'>
                            <img className="img-fluid" src="https://content.skyscnr.com/821cdb57a8248d673fcd9ccffe341de4/GettyImages-164155577.jpg?crop=100px:100px&quality=90" alt="" />
                            <div>
                                <h3>Bangkok</h3>
                                <p>Flight * Hotels * Car Hire</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 m-4">
                        <div className='trip-card'>
                            <img className="img-fluid" src="https://content.skyscnr.com/821cdb57a8248d673fcd9ccffe341de4/GettyImages-164155577.jpg?crop=100px:100px&quality=90" alt="" />
                            <div>
                                <h3>Bangkok</h3>
                                <p>Flight * Hotels * Car Hire</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 m-4">
                        <div className='trip-card'>
                            <img className="img-fluid" src="https://content.skyscnr.com/821cdb57a8248d673fcd9ccffe341de4/GettyImages-164155577.jpg?crop=100px:100px&quality=90" alt="" />
                            <div>
                                <h3>Bangkok</h3>
                                <p>Flight * Hotels * Car Hire</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 m-4">
                        <div className='trip-card'>
                            <img className="img-fluid" src="https://content.skyscnr.com/821cdb57a8248d673fcd9ccffe341de4/GettyImages-164155577.jpg?crop=100px:100px&quality=90" alt="" />
                            <div>
                                <h3>Bangkok</h3>
                                <p>Flight * Hotels * Car Hire</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='container'>
                <div className="row m-4">
                    <div className="col-md-12 col-sm-12">
                        <div className="d-flex flex-column justify-content-center text-center">
                            <h1>Explore More Travel Inspiration
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center m-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className='blog-post'>
                            <span>Solo travel</span>
                            <h4>How to solo travel on a budget</h4>
                            <p>5 min read • Published Dec 15, 2020</p>
                        </div>
                        <div className='blog-post'>
                            <span>Solo travel</span>
                            <h4>How to visit Hawaii on a budget</h4>
                            <p>5 min read • Published Dec 15, 2020</p>
                        </div>
                        <div className='blog-post'>
                            <span>Solo travel</span>
                            <h4>How to solo travel on a budget</h4>
                            <p>5 min read • Published Dec 15, 2020</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className='blog-post'>
                            <span>Travel on a budget</span>
                            <h4>HThe most expensive cities for people living and working abroad</h4>
                            <p>5 min read • Published Dec 15, 2020</p>
                        </div>
                        <div className='blog-post'>
                            <span>Solo travel</span>
                            <h4>How to solo travel on a budget</h4>
                            <p>5 min read • Published Dec 15, 2020</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Home;