// import React, { useState } from 'react';

import { useNavigate, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { NonRegisterDonor, auth, db, logout, RegisterDonor, firestore, RegistredSeeker } from '../firebase'

import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';

import { useAuthState } from "react-firebase-hooks/auth";
// import { firestore, auth, db, logout } from "../firebase";





function Orders() {
    const history = useHistory();
    // const [showHide, setShowHide] = useState("hide");
    const [payment, setPayment] = useState("");
    const [amount, setAmount] = useState("");
    const [donationType, setdonationType] = useState("");
    const [PHolder, setPHolder] = useState(true);

    const [donorData, setDonorData] = useState([])

    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    // Seeker states

    const [seekerName, setSeekerName] = useState("");
    const [seekerEmail, setSeekerEmail] = useState("");
    const [seekerPhone, setSeekerPhone] = useState("");
    const [seekerMessage, setSeekerMessage] = useState("");
    const [seekerData, setSeekerData] = useState([])

    // non register donors
    const [nonRegisterDonorServices, setNonRegisterDonorServices] = useState([])

    // donate food
    const [donateFoodData, setDonateFoodData] = useState([])

    // sponsor a family
    const [sponsorAfamilyData, setSponsorAfamilyData] = useState([])




    const fetchUserData = async () => {

        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();


            if (data.userType === "Admin") {

                document.getElementById("orderAdmin").style.display = "block"
                document.getElementById("orderSeeker").style.display = "none"
                document.getElementById("orderDonor").style.display = "none"

                await firestore.collection("donor").get().then((querySnapshot) => {
                    let donorDetail = []
                    querySnapshot.forEach(element => {
                        var data = element.data()

                        donorDetail.push(data)
                    })
                    setDonorData(donorDetail)
                })

                // NonRegister Donors

                await firestore.collection("users").get().then((querySnapshot) => {
                    let nonRegisterTotal = []
                    querySnapshot.forEach(element => {
                        var data = element.data()
                        if (data.userType === "Donor" && data.registered === "No")
                            nonRegisterTotal.push(data)
                    })
                    setNonRegisterDonorServices(nonRegisterTotal)
                })

                await firestore.collection("seeker").get().then((querySnapshot) => {
                    let seekerDetail = []
                    querySnapshot.forEach(element => {
                        var data = element.data()

                        seekerDetail.push(data)
                    })
                    setSeekerData(seekerDetail)
                })

                await firestore.collection("donateAfood").get().then((querySnapshot) => {
                    let donateFoodDetail = []
                    querySnapshot.forEach(element => {
                        var data = element.data()

                        donateFoodDetail.push(data)
                    })
                    setDonateFoodData(donateFoodDetail)
                })

                await firestore.collection("sponsorAfamily").get().then((querySnapshot) => {
                    let sponsorAfamilyDetail = []
                    querySnapshot.forEach(element => {
                        var data = element.data()

                        sponsorAfamilyDetail.push(data)
                    })
                    setSponsorAfamilyData(sponsorAfamilyDetail)
                })





            } else if (data.userType === "Donor") {

                document.getElementById("orderAdmin").style.display = "none"
                document.getElementById("orderSeeker").style.display = "none"
                document.getElementById("orderDonor").style.display = "flex"
                try {
                    const query = await db
                        .collection("users")
                        .where("uid", "==", user?.uid)
                        .get();
                    const data = await query.docs[0].data();
                    setEmail(data.email)
                    setName(data.name)
                } catch (err) {
                    console.error(err);
                    alert("An error occured while fetching user data");
                }


            } else {

                document.getElementById("orderAdmin").style.display = "none"
                document.getElementById("orderSeeker").style.display = "inline-table"
                document.getElementById("orderDonor").style.display = "none"


            }
        } catch (err) {
            toast.error("An error occured while fetching user data")
        }


    };
    const handleShow = async () => {
        if (!payment) {
            toast.error("Who do you want to pay for? ")
        } else if (!amount) {
            toast.error("Please select amount ")
        }
        else if (amount < 0) {
            toast.error("Please select positive amount ")
        } else if (!donationType) {
            toast.error("What kind of payment do you want? ")
        } else {

            RegisterDonor(email, name, payment, amount, donationType)
        }

    }

    const donatePayment = (e) => {
        let data = e.target.value
        if (data === "Cook Food" || data === "Uncook Food") {
            setPHolder(false)
        } else {
            setPHolder(true)
        }
    };
    const fetchSeekerEmail = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setSeekerEmail(data.email)
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    }

    const postData = () => {
        if (!seekerName) {
            toast.error("Please enter your name")
        } else if (!seekerPhone) {
            toast.error("Please enter your phone")
        } else if (!seekerMessage) {
            toast.error("Please enter your message")
        } else {
            RegistredSeeker(seekerName, seekerEmail, seekerPhone, seekerMessage)

            setSeekerName("")
            setSeekerPhone("")
            setSeekerEmail("")
            setSeekerMessage("")

        }
    }


    useEffect(() => {
        if (loading) return;
        if (!user) return history.push("/dashboard");
        // fetchUserEmail();
        fetchUserData();
        fetchSeekerEmail()

    }, [user, loading]);

    return (
        <div>
            <>
                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active fs-4 fw-bold"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#donationHistory"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                        >

                            Donation History

                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link fs-4 fw-bold"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                        >
                            Request History
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link fs-4 fw-bold"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                        >
                            Donate Food
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link fs-4 fw-bold"
                            id="contact-tab1"
                            data-bs-toggle="tab"
                            data-bs-target="#contact1"
                            type="button"
                            role="tab"
                            aria-controls="contact1"
                            aria-selected="false"
                        >
                            Sponsor A Family
                        </button>
                    </li>
                </ul> */}
                <div className="tab-content"
                    // id="myTabContent"
                    id='orderAdmin'
                    style={{ display: "none" }}>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation" style={{ backgroundColor: "#95D1CC", borderRadius: "60px" }}>
                            <button
                                className="nav-link active fs-4 fw-bold"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#donationHistory"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >

                                Donation History

                            </button>
                        </li>
                        <li className="nav-item" role="presentation" style={{ backgroundColor: "#95D1CC", borderRadius: "60px" }}>
                            <button
                                className="nav-link fs-4 fw-bold"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Request History
                            </button>
                        </li>
                        <li className="nav-item" role="presentation" style={{ backgroundColor: "#95D1CC", borderRadius: "60px" }}>
                            <button
                                className="nav-link fs-4 fw-bold"
                                id="contact-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#contact"
                                type="button"
                                role="tab"
                                aria-controls="contact"
                                aria-selected="false"
                            >
                                Donate Food
                            </button>
                        </li>
                        <li className="nav-item" role="presentation" style={{ backgroundColor: "#95D1CC", borderRadius: "60px" }}>
                            <button
                                className="nav-link fs-4 fw-bold"
                                id="contact-tab1"
                                data-bs-toggle="tab"
                                data-bs-target="#contact1"
                                type="button"
                                role="tab"
                                aria-controls="contact1"
                                aria-selected="false"
                            >
                                Sponsor A Family
                            </button>
                        </li>
                    </ul>




                    <div
                        className="tab-pane fade show active"
                        id="donationHistory"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        <div >
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card__body">

                                            <table className="table"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Donation type</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                {donorData.map((item, index) => (
                                                    <tbody key={index}>
                                                        <tr>
                                                            <td> {item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.donationType}</td>
                                                            <td>{item.amount}</td>

                                                        </tr>
                                                    </tbody>
                                                ))}
                                                {nonRegisterDonorServices.map((item, index) => (
                                                    <tbody key={index}>
                                                        <tr>
                                                            <td> {item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.donationType}</td>

                                                            <td>{item.amount}</td>

                                                        </tr>
                                                    </tbody>
                                                ))}


                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                    >
                        <div >
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card__body">

                                            <table className="table"
                                            >
                                                <thead>
                                                    <tr>

                                                        <th scope="col">Sr.</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Phone number</th>
                                                        <th scope="col">Message</th>

                                                    </tr>
                                                </thead>
                                                {seekerData.map((item, index) => (
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td> {item.seekerName}</td>
                                                            <td>{item.seekerEmail}</td>
                                                            <td>{item.seekerPhone}</td>

                                                            <td>{item.seekerMessage}</td>

                                                        </tr>
                                                    </tbody>
                                                ))}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                    >
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">

                                        <table className="table"
                                        >
                                            <thead>
                                                <tr>

                                                    <th scope="col">Sr.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Phone number</th>
                                                    <th scope="col">Donation Type</th>
                                                    <th scope="col">Food Type</th>
                                                    <th scope="col"> Weight</th>



                                                </tr>
                                            </thead>
                                            {donateFoodData.map((item, index) => (
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td> {item.donateName}</td>
                                                        <td>{item.donatePhone}</td>
                                                        <td>{item.donationType}</td>
                                                        <td>{item.foodType}</td>
                                                        <td>{item.donateWeight}</td>

                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* sponsor a family */}
                    <div
                        className="tab-pane fade"
                        id="contact1"
                        role="tabpanel"
                        aria-labelledby="contact-tab1"
                    >
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">

                                        <table className="table"
                                        >
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sr.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Phone number</th>
                                                    <th scope="col">Donation Based</th>
                                                    <th scope="col">Sponsor Type</th>
                                                    <th scope="col"> Amount</th>



                                                </tr>
                                            </thead>
                                            {sponsorAfamilyData.map((item, index) => (
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td> {item.sponsorName}</td>
                                                        <td>{item.sponsorPhone}</td>
                                                        <td>{item.doantionBased}</td>
                                                        <td>{item.sponsorType}</td>
                                                        <td>{item.sponsorAmount}</td>

                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>





            <div className="row  justify-content-center align-items-center py-3"
                id="orderDonor"
                style={{ display: "none" }}
            >
                <div className="col-lg-2 col-sm-12 col-md-12 text-center my-2  " style={{ height: "45px" }}>
                    <p style={{
                        height: "100%", width: "100%", lineHeight: "50px",
                        fontWeight: "bolder"
                    }}>QUICK DONATE</p>
                </div>
                <div className="col-lg-3 col-md-4 text-center my-2 " style={{ height: "45px" }}>
                    <select
                        onClick={e => { donatePayment(e) }}
                        onChange={e => setPayment(e.target.value)}
                        className="form-select border-success border-2 "
                        aria-label="Default select example"
                        style={{ height: "100%", width: "100%" }}>
                        <option > Payment for</option>
                        <option value="Single Payment">Single Payment</option>
                        <option value="Regular Payment">Regular Payment</option>
                        <option value="Cook Food"> Cook Food</option>
                        <option value="Uncook Food">Uncook Food</option>
                        <option value="Medical">Medical</option>
                        <option value="Water ">Water </option>
                        <option value="Ration">Ration</option>
                        <option value="Education">Education</option>
                    </select>
                </div>
                <div className="col-lg-2 col-md-4 text-center my-2  " style={{ height: "45px" }}>
                    <div
                        style={{ height: "100%", width: "100%", borderRadius: "3px" }}>
                        <input
                            className="border border-success border-2 px-2 rounded"
                            type="number"
                            name=""
                            id="amount"
                            placeholder={PHolder ? "Amount" : "QTY"}
                            onChange={e => setAmount(e.target.value)}
                            style={{ height: "100%", width: "100%", border: "none" }} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 text-center my-2 " style={{ height: "45px" }}>
                    <select
                        className="form-select border-success border-2 "
                        aria-label="Default select example"
                        onChange={e => setdonationType(e.target.value)}
                        style={{ height: "100%", width: "100%" }}>
                        <option > Donation type</option>
                        <option value="general-donation">General Donation</option>
                        <option value="sadka">Sadka</option>
                        <option value="zakat">Zakat</option>
                    </select>
                </div>
                <div className="col-lg-2 text-center my-2 col-sm-12 col-md-6" >
                    <button className="btn "
                        onClick={handleShow}
                        style={{
                            borderRadius: '15px',
                            fontWight: ' bold', color: 'white', backgroundColor: 'rgb(193, 35, 35)'
                        }}> Donate Now</button>
                </div>
            </div>

            {/* Seeker */}

            < div className="container "
                id='orderSeeker'
                style={{ display: "none" }
                }
            >
                <h3><u>Request For More Donations
                </u>
                </h3>
                <br />

                <div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Password"
                            value={seekerName}
                            onChange={(e) => setSeekerName(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Name:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="Name"
                            value={seekerPhone}
                            onChange={(e) => setSeekerPhone(e.target.value)}

                        />
                        <label htmlFor="floatingInput">Phone Number:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="Phone nember"
                            value={seekerEmail}
                            disabled
                        // onChange={(e) => setSeekerEmail(e.target.value)}

                        />
                        <label htmlFor="floatingInput">Email Address:</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style={{ height: 100 }}
                            value={seekerMessage}
                            onChange={(e) => setSeekerMessage(e.target.value)}

                        />
                        <label htmlFor="floatingTextarea2">Message...</label>
                    </div>
                    <div>
                        <button className='btn btn-success'
                            onClick={postData}
                        >Submit</button>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Orders