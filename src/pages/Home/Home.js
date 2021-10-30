import React, { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Button, CardGroup, Card } from 'react-bootstrap';
import './Home.css';
import PackegsCard from '../../components/PackegsCard/PackegsCard';
import TripCompnents from '../../components/TripComponents/TripCompnents';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
const Home = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://lit-bastion-18915.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <>
            {/* Banner */}
            <div className='container'>
                <BannerSlider></BannerSlider>
            </div>
            {/* destinations */}
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
            {/* Packages */}
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
                        {
                            packages.slice(0, 8).map(packag => <PackegsCard data={packag} key={packag._id}></PackegsCard>)
                        }
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
                    <TripCompnents></TripCompnents>
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