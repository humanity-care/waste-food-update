import React from 'react'
import { Carousel } from "react-bootstrap";
import './testimonial.css'
function Testimonial() {
    return (

        <div id='testimonial' style={{ backgroundColor: "rgb(42 52 213)", color: "white" }}>
            <u className="text-center ">
                <h2 style={{ position: 'relative', top: '36px' }}>TESTIMONIALS</h2>
            </u>
            <Carousel>
                <Carousel.Item interval={3000} >
                    <div className="container py-5" >
                        <div >
                            <p
                                style={{ margin: 'auto', width: '70vw', textAlign: "justify" }}>

                                Care Humanity have been collecting our food waste from our new restaurant for the last year.
                                There high level of customer service proves their commitment to offering a fully 100% recycling
                                service to their clients in the commercial sector. Their professionalism is second to none and
                                is a testament to the hard work
                                and enthusiasm that is shown throughout the whole Organizaion.
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000} >
                    <div className="container py-5" >
                        <div >
                            <p
                                style={{ margin: 'auto', width: '70vw', textAlign: "justify" }}
                            >
                                The team is well organised and arrived within 1 hour of making the call about donation.
                                They administered the food , came in their own vehicle n gathered food in own utensils
                                ..hasslefree food pick up.. happy to have donated excess food from the wedding reception..
                                definitely would suggest for others to use this Organization if you have untouched safe food to donate.
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000} >
                    <div className="container py-5" >
                        <div >
                            <p
                                style={{ margin: 'auto', width: '70vw', textAlign: "justify" }}
                            >It is a fantastic job..It is also not easy to do this kind of work bcz nowasdays ppl
                                always busy with thier work untill they didn't hv a time to think abt others..so,
                                whatever you guys did is outstanding..May god bless you all always..</p>
                        </div>
                    </div>
                </Carousel.Item>



            </Carousel>

        </div>
    )
}

export default Testimonial
