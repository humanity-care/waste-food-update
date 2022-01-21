import React from 'react';
import './header.css'

function Header() {
    return (
        <header >

            <div className="container-fluid header" >
                <nav className=" container navbar"
                    style={{ padding: '2px' }}   >

                    <span>
                        <h5>< strong > Head Office: </strong>
                            < i className="fas fa-map-marker-alt " > </i>
                            Kotwali Rd, Gurunanakpura, Faisalabad, Punjab, 38000 ,Pakistan
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            < i className="fas fa-phone-alt " > </i>
                            +92-41-9200886
 </h5>
                    </span>


                </nav>
            </div>
        </header >
    )
}
export default Header