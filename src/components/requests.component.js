import React from 'react'

const Requests = ({requests, user}) => {
    const req = requests.filter(fromId => (fromId === user.userId));
    console.log(req)
    return (
        <div className='orgs_list'>
            <div className="card-group row">
                {

                    req.map(item => (
                        <div className="card" key={item.id}>
                            <div className="card-body">
                                <h5 className="card-title">Request {item.id}</h5>
                                <p className="card-text">{item.content.message}</p>
                                <a href="#" className="btn btn-danger">Cancel</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Requests;