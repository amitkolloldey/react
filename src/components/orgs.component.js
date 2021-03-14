import React from 'react'
import {Link} from "react-router-dom";

const Orgs = ({orgs}) => {
    return (
        <div className='orgs_list'>
            <div className="card-group row">
                {
                    orgs.map(item => (
                        <div className="col-4 p-3" key={item.id}>
                            <div className="card_img">
                                <img className="card-img-top" src={process.env.PUBLIC_URL + '/dgfp.png'}
                                     alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                            <div className="card-footer pub_time">
                                <small className="text-muted">Published on {item.createdAt}</small>
                            </div>
                            <div className="card-footer btns">
                                <Link to={`/trainer_registration/${item.id}`} className='join_link'>Join</Link>
                                <Link to={`/orgs/${item.id}`} className='join_link view_btn'>View Details</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Orgs;