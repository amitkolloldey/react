import React from 'react'
import {connect} from "react-redux";
import { updateCurrentUser} from '../redux/actions/authActions';
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const ProfilePage = ({loading, user, dispatchUpdateCurrentUserAction}) => {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        dispatchUpdateCurrentUserAction(data.content, data.type, (response) => {
            if (response) {
                setTimeout(() => window.location.replace('/'), 1000)
            }
            toast.success('Profile Updated Successfully!');
        }, (message) => toast.error(message))
        return false;
    }

    return (
        <div className='right_wrapper'>
            <h2 className='page_title'>{user.name}'s Profile</h2>
            <div className='main_content'>
                <div className="request_form">
                    <form noValidate className=" p-4" onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name"
                                   placeholder="Full Name" name='name' ref={register({required: true})} value={user.name}/>
                            {errors.name && (<p className='error'>Name is required*</p>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" name="phone"
                                   placeholder="0173...." ref={register({required: true})} value={user.phone}/>
                            {errors.phone && (<p className='error'>Phone is required*</p>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name='email'
                                   placeholder="Your email" ref={register({required: true})} value={user.email}/>
                            {errors.email && (<p className='error'>Email is required*</p>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bio" className="form-label">Short Bio</label>
                            <textarea name="bio" id="bio" className='form-control' placeholder='Short Bio'
                                      ref={register({required: true})} value={user.bio}/>
                            {errors.bio && (<p className='error'>Bio is required*</p>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea name="address" id="address" className='form-control' placeholder='Address'
                                      ref={register({required: true})} value={user.address}/>
                            {errors.address && (<p className='error'>Address is required*</p>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pic" className="form-label">Your Image</label>
                            <input className="form-control" type="file" id="pic" name='pic' ref={register}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    dispatchUpdateCurrentUserAction: (content, type, orgId, onSuccess, onError) =>
        dispatch(updateCurrentUser({content, type, orgId}, onSuccess, onError))
})


const mapStateToProps = (state) => ({
    user: state.user,
    loading: state.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

