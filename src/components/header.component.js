import React from 'react'
import {Link} from "react-router-dom";

const Header = () => (
    <header>
        <div className="row">
            <div className="col-md-12 text-center">

                <div className="logo">
                    <Link to='/'><img src={process.env.PUBLIC_URL + '/logo.svg'}  /></Link>
                </div>
            </div>
        </div>
    </header>
)

export default Header