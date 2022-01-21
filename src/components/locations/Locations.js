import React from 'react';
import './location.css'

function Locations() {
    return (
        <div id='ourOffices' style={{backgroundColor:"#00a7e1"}} className='py-1'>
            <div className="container-fluid d-flex " >
                <div className="container m-auto">
                    <div className="row align-items-center" > 
                        <div className="col-lg-4 col-sm-12 col-md-12" style={{color:"white"}}>
                            <div className="wpb_wrapper">
                                <h2 style={{textDecoration:"underline"}}>8 LOCATIONS</h2>
                                <h5>Serving you better</h5>
                                <h5>Stay connected with us</h5>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12 col-md-12 text-center py-3" style={{color:"0895a4"}}>
                            <div className="row "  >
                            <div className="col-lg-3 col-sm-6 col-md-3 p-2">
                                    <div className="py-3 rounded locationCity" >
                                    <a href='https://www.punjab.gov.pk/faisalabad' target={"_blank"}>Faisalabad HQ</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-3 p-2">
                                    <div className="py-3 rounded locationCity" >
                                    <a href='https://kpt.gov.pk/' target={"_blank"}>Karachi</a>
                                </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-3 p-2">
                                    <div className="py-3 rounded locationCity" >
                                    <a href='https://multan.punjab.gov.pk/history_mtn' target={"_blank"}>Multan</a> </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-3 p-2">
                                    <div className="py-3 rounded locationCity" >
                                    <a href='https://bhc.gov.pk/district-judiciary/quetta/introduction/history' target={"_blank"}>Quetta</a> 
                                    </div>
                                </div>
                                </div>
                            <div className="row ">
                                <div className="col-lg-3 col-sm-6 col-md-3 p-2">
                                    <div className="py-3 rounded locationCity" >
                                    <a href='https://bhc.gov.pk/district-judiciary/sibi/introduction/history' target={"_blank"}>Sibi</a> 
                                      </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-3 p-2">
                                    <div className="py-3 rounded locationCity" >
                                    <a href='https://lahore.punjab.gov.pk/' target={"_blank"}>Lahore</a> 
                                     </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-3 p-2">
                                    <div className="py-3 rounded locationCity" >
                                    <a href='https://kp.gov.pk/' target={"_blank"}>Peshawer</a> 
                                     </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-md-3 p-2">
                                    <div className="py-3 rounded locationCity" >
                                    <a href='https://pwd.sindh.gov.pk/hyderabad' target={"_blank"}>Hyderabad</a> 
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Locations
