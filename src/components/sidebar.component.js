import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Sidebar({user, dispatchLogoutAction}) {
    return (
        <div className='left_sidebar'>
            <div className="user_image">
                <Link to={'/profilepage/'+  user.userId}>
                    {user.pic ? (<img src={user.pic}/>) : (<i className='fas fa-user'/>)}
                    <p className='user_role'>{user.role}</p>
                    <h4 className='user_name'>{user.name}</h4>
                </Link>
            </div>
            <ul className='main_side_menu'>
                <li>
                    <NavLink to="/orgs" ><i className="fas fa-building"/> <span>Orgs</span></NavLink>
                </li>
                <li>
                    <NavLink to="/courses"><i className="fas fa-book"/> <span>Courses</span></NavLink>
                </li>
                <li>
                    <NavLink to="/requests"><i className="fas fa-plus-circle"/> <span>Requests</span></NavLink>
                </li>
            </ul>
            <ul className='bottom_sidemenu'>
                <li>
                    <a href="#"><i className="fab fa-facebook"/></a>
                    <a href="#"><i className="fab fa-twitter"/></a>
                    <a href="#"><i className="fab fa-linkedin"/></a>
                </li>
                <li>
                    <button className='btn logout_btn' onClick={dispatchLogoutAction}><i
                        className="fas fa-sign-out-alt"/> Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;