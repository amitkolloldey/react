import React from 'react'
import NotFound from "./notfound.component";

// Status = [ 'pending', 'approved', 'denied']

const Requests = ({requests, user}) => {
    const pending_trainee_reqs = requests.filter(e => (e.handled_by === user.userId && e.status === 'pending'))
    const pending_my_reqs = requests.filter(e => (e.fromId === user.userId && e.status === 'pending'))
    return (
        <div className='orgs_list'>
            <div className="card-group row request_list">
                <h4 className='page_title'>
                    Trainee Request
                </h4>

                {
                    pending_trainee_reqs.length > 0 ? (
                        pending_trainee_reqs.map(item => (
                            <div className="col-md-6" key={item.id}>
                                <div className="card-body">
                                    <h5 className="card-title">Request {item.id}</h5>
                                    <p className="card-text">{item.content.message}</p>
                                    <a href="#" className="btn btn-danger">Cancel</a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <NotFound/>
                    )
                }
            </div>
            <div className="card-group row request_list">
                <h4 className='page_title'>
                    My Pending Request To Organization
                </h4>
                {
                    pending_my_reqs.length > 0 ? (
                    pending_my_reqs.map(item => (
                        <div className="col-md-6" key={item.id}>
                            <div className="card-body">
                                <h5 className="card-title">Request {item.id}</h5>
                                <p className="card-text">{item.content.message}</p>
                                <a href="#" className="btn btn-danger">Cancel</a>
                            </div>
                        </div>
                    ))
                    ) : (
                        <NotFound/>
                    )
                }
            </div>
        </div>
    )
}


export default Requests;