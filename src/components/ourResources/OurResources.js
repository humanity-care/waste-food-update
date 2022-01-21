import React from 'react';
import './ourResources.css'

function OurResources() {
    return (
        <div id='ourResources' style={{ backgroundColor: "#0195d3" }}>
            <div className="container pt-3"  >
                <div className="row " style={{ color: "white" }} >
                    <div className="col">
                        <u className="text-center py-3"> <h2>Our Resourcess</h2></u>
                        <p className="text-center" style={{ margin: "auto" }}>
                            Problems faced by the developed and the developing countries in the area of
                            Organization demand radically different approaches. Whereas,
                            the developed countries are putting the responsibility primarily on
                            the government, the developing countries are struggling to mobilise
                            their own resources or
                            look for foreign assistance for this purpose. </p>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row gx-3">
                    <div className="col-lg-4 col-sm-12 py-4">
                        <div className="p-3 border bg-light text-center " style={{ borderRadius: "15px" }} >
                            <div className='resourcesvalues'>
                                <h2 >1</h2>
                            </div>
                            <h4 className=" py-2">VOLUNTEER BASE</h4>
                            <p style={{ textAlign: "justify" }}>Humanity Care foundation is run entirely with the help of volunteers. There are round six thousand volunteers, comprising of zonal heads, workers at several Edhi Homes, clerks at Edhi Centers, workers at maternity homes and ambulance drivers.</p>
                            {/*<p>Volunteers  will assist the BASE staff in creating a positive environment for our members. Daily volunteer activities  could include office tasks, daily operational tasks, member engagement  and mentoring, homework help and member supervision. Volunteers can create their own schedules with hours and days per week.</p>*/}
                        </div>

                    </div>
                    <div className="col-lg-4 col-sm-12 py-4">
                        <div className="p-3  border bg-light text-center " style={{ borderRadius: "15px" }}>
                            <div className='resourcesvalues'>
                                <h2 >2</h2>
                            </div>
                            <h4 className=" py-2">DONATION</h4>
                            <p style={{ textAlign: "justify" }}>
                                Voluntary donation from individuals ranging from Rs. 5 to many hundreds of thousand of rupees, support the foundation’s activities, the emphasis is on individuals social masses contribution are also made in form of food, clothing medicines.
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-sm-12 py-4">
                        <div className="p-3 border bg-light text-center " style={{ borderRadius: "15px" }}>
                            <div className='resourcesvalues'>
                                <h2 >3</h2>
                            </div>
                            <h4 className=" py-2">MANAGEMENT STYLE</h4>
                            <p style={{ textAlign: "justify" }}>
                                Management of all funds is centralized and remains in the exclusive controls of  Orgnaziation and his Teams who are personally involved in all operations of the foundation. They are also responsible national and international fund-raising.
                            </p>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default OurResources
