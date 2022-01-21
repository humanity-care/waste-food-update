import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { donateAfood, sponsorAfamily } from '../../firebase'
import './whoWeAre.css'

function WhoWeAre() {

    // Donate food
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // sponsor a family
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Donate food
    const [donateName, setDonateName] = useState("");
    const [donateEmail, setDonateEmail] = useState("");
    const [donatePhone, setDonatePhone] = useState("");
    const [donateWeight, setDonateWeight] = useState("");
    const [foodType, setFoodType] = useState("cooked");
    const [donationType, setDonationType] = useState("general-donation");

    // sponsor a family
    const [sponsorName, setSponsorName] = useState("");
    const [sponsorEmail, setSponsorEmail] = useState("");
    const [sponsorPhone, setSponsorPhone] = useState("");
    const [doantionBased, setDoantionBased] = useState("medical");
    const [sponsorType, setSponsorType] = useState("monthly");
    const [sponsorAmount, setSponsorAmount] = useState("");



    const postDonateFood = () => {

        if (!donateName) {
            toast.error("Please enter your name")
        } else if (!donateEmail) {
            toast.error("Please enter your email address")
        } else if (!donatePhone) {
            toast.error("Please enter your phone number")
        } else if (!donateWeight) {
            toast.error("Please enter food weight")
        } else {
            let registered = "No"
            donateAfood(donateName, donateEmail, donatePhone, foodType, donateWeight, donationType, registered)
            setShow(false)
        }
    }

    const postSponsorFamiy = () => {
        if (!sponsorName) {
            toast.error("Please enter your name")
        } else if (!sponsorEmail) {
            toast.error("Please enter your email address")
        } else if (!sponsorPhone) {
            toast.error("Please enter your phone number")
        } else if (!sponsorAmount) {
            toast.error("Please enter your amount")
        } else {
            let registered = "No"
            sponsorAfamily(sponsorName, sponsorEmail, sponsorPhone, sponsorType, sponsorAmount, doantionBased, registered)
            setShow1(false)
        }
    }

    return (
        <div id='introduction' style={{ backgroundColor: "#0195d3", wordSpacing: "-2px" }}>
            <div className="container-fluid  d-flex  justify-content-center align-items-center w-100 py-5  "
                style={{ textAlign: "justify" }}
            >
                <div className="container "  >
                    <u style={{
                        color: "white", fontWeight: "bold",
                        borderBottom: "5px solid", textAlign: "center", margin: "auto",
                    }}>
                        <h1
                        >WHO WE ARE</h1>
                    </u>
                    <p style={{ color: "white", paddingTop: "25px", fontSize: ' 20px' }}>
                        We are developing this project to help poor and needy peoples in the Pakistan,
                        and reduce the food wastage,
                        according to a report, 40 percent of food in Pakistan is wasted.
                        Food wastage is common in wedding ceremonies (Banquets), and hotels.
                        The main goal of this project is to reduce hunger of poor people by
                        supplying that food being wasted or food in excess in banquets and hotels or in events,
                        with the help of Non-Profit Organizations or some other organizations
                        (Receive donations and distribute food).

                    </p>

                </div>
            </div>


            <div className='container-fluid  d-flex backgroundImg py-5' style={{ color: "white" }}>
                <div className='container m-auto' >
                    <div className="row">
                        <div className=" col-lg-4 col-sm-12 col-md-4 py-3 d-flex " style={{ border: "none", flexDirection: 'column' }}>
                            <img style={{ height: "100px", width: "100px", margin: "auto" }} src="https://fatimid.org/wp-content/uploads/2019/08/vision.png" className="card-img-top" alt="..." />
                            <div className="card-body py-2" style={{ textAlign: "center" }}>
                                <h2 className="card-title">Our Vision</h2>
                                <p className="card-text">
                                    To maintain and project Humanity <br />Care Foundation on the world map.
                                </p>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-sm-12 col-md-4 py-3 d-flex" style={{ border: "none", flexDirection: 'column' }}>
                            <img style={{ height: "100px", width: "100px", margin: "auto" }} src="https://fatimid.org/wp-content/uploads/2019/08/mission.png" className="card-img-top" alt="..." />
                            <div className="card-body py-2" style={{ textAlign: "center" }}>
                                <h2 className="card-title">Our Mission</h2>
                                <p className="card-text">
                                    To achieve managerial & technical<br />excellence in the field of Humanity <br />Care banking & haematological services.
                                </p>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-sm-12 col-md-4 py-3 d-flex" style={{ border: "none", flexDirection: 'column' }}>
                            <img style={{ width: "170px", margin: "auto", marginTop: "20px" }} src="https://fatimid.org/wp-content/uploads/2018/09/core-values.png" className="card-img-top" alt="..." />
                            <div className="card-body py-2" style={{ textAlign: "center" }}>
                                <h2 className="card-title">Core Values</h2>
                                <p className="card-text">
                                    Bring communities together to<br />promote needy people
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid d-flex py-4' style={{ color: "#fff", border: "1 solid black", backgroundColor: "#555de5" }}>
                <div className='container m-auto'  >
                    <div className='text-center pb-2'   >
                        <h2>  CHANGE THE LIFE OF THOSE WHO HAVE NO HOPE.</h2>
                    </div>
                    <div className="row mt-2 justify-content-center ">
                        <div className="col-lg-4 col-md-6 text-center py-3 ">
                            <button style={{ borderRadius: "10px" }} className='donateFoodButton1'
                                onClick={handleShow}
                            >DONATE FOOD</button>


                        </div>
                        <div className="col-lg-4 col-md-6 text-center py-3  ">
                            <button style={{ borderRadius: "10px" }} className='donateFoodButton2'
                                onClick={handleShow1}
                            >SPONSOR A FAMILY</button>

                        </div>
                    </div>

                </div>

            </div>

            {/* Donate food */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>DONATE FOOD</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        className="container mb-2 ">
                        <div className="row">
                            <div className="col-md-10 mx-auto  ">
                                <div >
                                    <div className="mb-3">
                                        <label className="form-label fw-bold" >Name</label>
                                        <input
                                            name='name'
                                            type="text"
                                            className="form-control"

                                            value={donateName}
                                            onChange={(e) => {
                                                setDonateName(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Email address</label>
                                        <input

                                            name="email"
                                            type="email"
                                            className="form-control"
                                            value={donateEmail}
                                            onChange={(e) => {
                                                setDonateEmail(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Phone number</label>
                                        <input
                                            name='phone'
                                            type="number"
                                            className="form-control"
                                            required
                                            value={donatePhone}
                                            onChange={(e) => {
                                                setDonatePhone(e.target.value);
                                            }}

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Food Type</label>

                                        <select
                                            className="form-select "
                                            aria-label="Default select example"
                                            onChange={e => setFoodType(e.target.value)}
                                        >
                                            <option value="cooked">Cooked</option>
                                            <option value="un cooked"> Un Cooked</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Weight </label>
                                        <input
                                            name='amount'
                                            type="text"
                                            className="form-control"
                                            // disabled
                                            value={donateWeight}
                                            onChange={(e) => {
                                                setDonateWeight(e.target.value);
                                            }}

                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Donation Type</label>
                                        <select
                                            className="form-select "
                                            aria-label="Default select example"
                                            onChange={e => setDonationType(e.target.value)}
                                        >
                                            <option value="general-donation">General Donation</option>
                                            <option value="sadka">Sadka</option>
                                            <option value="zakat">Zakat</option>
                                        </select>

                                    </div>

                                    <div className="text-center py-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            onClick={postDonateFood}
                                        >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Modal.Body>

            </Modal>

            {/* sponsor a family */}

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>SPONSOR A FAMILY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        className="container mb-2 ">
                        <div className="row">
                            <div className="col-md-10 mx-auto  ">
                                <div >
                                    <div className="mb-3">
                                        <label className="form-label fw-bold" >Name</label>
                                        <input
                                            name='name'
                                            type="text"
                                            className="form-control"

                                            value={sponsorName}
                                            onChange={(e) => {
                                                setSponsorName(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Email address</label>
                                        <input

                                            name="email"
                                            type="email"
                                            className="form-control"
                                            value={sponsorEmail}
                                            onChange={(e) => {
                                                setSponsorEmail(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Phone number</label>
                                        <input
                                            name='phone'
                                            type="number"
                                            className="form-control"
                                            required
                                            value={sponsorPhone}
                                            onChange={(e) => {
                                                setSponsorPhone(e.target.value);
                                            }}

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Sponsor Type</label>
                                        <select
                                            className="form-select "
                                            aria-label="Default select example"
                                            onChange={e => setSponsorType(e.target.value)}
                                        >
                                            <option value="monthly">Monthly</option>
                                            <option value="annualy"> Annualy</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Doantion Based</label>
                                        <select
                                            className="form-select "
                                            aria-label="Default select example"
                                            onChange={e => setDoantionBased(e.target.value)}
                                        >
                                            <option value="medical">Medical</option>
                                            <option value="ration">Ration</option>
                                            <option value="education">Education</option>
                                        </select>

                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Amount </label>
                                        <input
                                            name='amount'
                                            type="number"
                                            className="form-control"
                                            // disabled
                                            value={sponsorAmount}
                                            onChange={(e) => {
                                                setSponsorAmount(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="text-center py-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            onClick={postSponsorFamiy}
                                        >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default WhoWeAre
