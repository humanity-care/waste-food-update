import React from 'react';
import "./ourHistory.css"
function OurHistory() {
    return (
        <div id='founder' style={{ backgroundColor: "#0195d3" }}>
            <div className="container-fluid " >
                <div className='container'>
                    <div className="row py-2" style={{ color: "white" }}>
                        <h2 className="text-center py-3">Our History as a  Care Humanity Organisation</h2>
                        <p className="text-center">
                        Care Humanity is a movement turned NGO started by Nimra Younas and her friends Kinza Mobeen and Madeeha Waris to get rid of the problem of hunger. The team of Care Humanity scouts for marriage halls, institutions and homes that might have excess food.The food is collected and then repackaged and distributed to the people in need. On an average, 600 plates of food were being provided daily as reported in 2021                        </p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#0195d3" }}>
                <div className="container "
                    style={{ paddingTop: "115px" }}
                >
                    <div className="row gx-3">
                        <div className="col-lg-4 col-sm-12 col-md-12 " style={{ padding: "70px 10px" }}>
                            <div className="p-3 border bg-light text-center "
                                style={{ borderRadius: "25px" }}>
                                <div className='text-center' style={{ marginTop: '-115px' }}>
                                    <img className="founder" src="./founder/Nimra younas-f.jpeg" alt="nimra (founder)" />
                                    <h5 className='founderName pt-3'>Nimra Younas</h5>
                                    <p style={{ fontSize: "13px" }}>Founder of care humanity</p>
                                </div>
                                <p className="da" style={{ textAlign: "justify" }}> Nimra Younas is the woman who started the fight against food waste in Faisalabad. 
                             Nimra Younas has founded Care Humanity Orgnization in 2021 and has extensive knowledge on food waste, has a strong national network 
                             and a collaboration with the Pakistan Government.
                            Care Humanity is a largest non-profit orgization against food waste, which has initiated the fight against food waste. 
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12 " style={{ padding: "70px 10px" }}>
                            <div className="p-3  border bg-light text-center "
                                style={{ borderRadius: "25px" }}>
                                <div className='text-center' style={{ marginTop: '-115px' }} >
                                    <img className="founder" src="./founder/Kinza mubeen-f.jpeg" alt=" kinza rehman (chair person)" />
                                    <h5 className='founderName pt-3'>Kinza Mobeen </h5>
                                    <p style={{ fontSize: "13px" }}>Chairperson of care humanity</p>
                                </div>
                                <p style={{ textAlign: "justify" }}>
                                After  a year of seeing so much food wasted when people move, 
                                Kinza Mobeen decided to take action.“Our goal is to be an exceptional
                                 Airport in service to our communities, and this effort takes our 
                                 commitment to a new level. We appreciate the innovative solution provided by Waste No Food, and we are grateful for the participation of so many restaurant operators at Care Humanity.

                                </p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12 " style={{ padding: "70px 10px" }}>
                            <div className="p-3 border bg-light text-center "
                                style={{ borderRadius: "25px" }}>
                                <div className='text-center' style={{ marginTop: '-115px' }} >
                                    <img className="founder" src="./founder/Madeeha waris-f.jpeg" alt="madeeha(...)" />
                                    <h5 className='founderName pt-3'>Madeeha Waris</h5>
                                    <p style={{ fontSize: "13px" }}>President  care humanity</p>
                                </div>
                                <p style={{ textAlign: "justify" }}>
                                We are developing this project to help poor and needy peoples in the PK, and reduce the food wastage, 
                                according to a report, 40 percent of food in PK is wasted.
                                Food wastage is common in wedding ceremonies (Banquets), and hotels.The main goal of this project is to
                                 reduce hunger of poor people by supplying that food being wasted or food in excess 
                                 in banquets and hotels or in events.
                                    </p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            {/* <div className="container-fluid d-flex" >
                <div className="container m-auto">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-sm-12 py-3" style={{ color: "white" }}>
                            <div className='text-center' >
                                <img className="founder" src="./founder/ahsan.png" alt="ahan (founder)" />
                                <h5 className='founderName pt-3'>Ahsan Ali</h5>
                                <p style={{ fontSize: "13px" }}>Founder of care humanity</p>
                            </div>
                            <p style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                Food wastage is common in wedding ceremonies (Banquets),
                                and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                or food in excess in banquets and hotels or in events,</p>
                        </div>
                        <div className="col-lg-4 col-sm-12 py-3" style={{ color: "white" }}>
                            <div className='text-center' >
                                <img className="founder" src="./founder/abdulRehman.png" alt=" abdul rehman (chair person)" />
                                <h5 className='founderName pt-3'>Abdul Rehman </h5>
                                <p style={{ fontSize: "13px" }}>Chair Person of care humanity</p>
                            </div>
                            <p style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                Food wastage is common in wedding ceremonies (Banquets),
                                and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                or food in excess in banquets and hotels or in events,</p>
                        </div>
                        <div className="col-lg-4 col-sm-12 py-3" style={{ color: "white" }}>
                            <div className='text-center' >
                                <img className="founder" src="./founder/kashif.png" alt="kashif(...)" />
                                <h5 className='founderName pt-3'>Kashif Ali </h5>
                                <p style={{ fontSize: "13px" }}>peroson of care humanity</p>
                            </div>
                            <p style={{ textAlign: "justify" }}>We are developing this project to help poor and needy peoples in the Pakistan,
                                and reduce the food wastage, according to a report, 40 percent of food in Pakistan is wasted.
                                Food wastage is common in wedding ceremonies (Banquets),
                                and hotels. The main goal of this project is to reduce hunger of poor people by supplying that food being wasted
                                or food in excess in banquets and hotels or in events,</p>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="container-fluid " >
                <div className='container'>
                    <div className="row " style={{ color: "white" }}>
                        <h2 className="text-center ">Aims & Objectives Of Our Care Humanity Organisation</h2>
                        <p className="text-center">
                        The objective of our Website is to enable a link of communication and interactions
                        among NGOs, donors and the needy.
                        The people wishing to donate will be able to see all the options available with them to
                        do the same. The item they wish to donate then shall be collected by a volunteer who
                        is connected to the donors via our Website.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurHistory
