import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {getOrgById, trainerRequest} from '../redux/actions/orgAction';
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const TrainerRegistrationPage = ({loading, match, dispatchTrainerRequestAction, dispatchGetOrgByIdAction}) => {
    const [name, setName] = useState('');
    const {orgId} = match.params;
    useEffect(() => {
        if (orgId) {
            dispatchGetOrgByIdAction(orgId, (response) => {
                setName(response.data.name);
            });
        }
    }, [dispatchGetOrgByIdAction, match.params]);

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        dispatchTrainerRequestAction(data.content, data.type, data.orgId, (response) => {
            if (response) {
                setTimeout(() => window.location.replace('/orgs'), 1000)
            }
            toast.success('Request Sent Successfully!');
        }, (message) => toast.error(message))
        return false;
    }

    return (
        <div className='right_wrapper'>
            <h2 className='page_title'>Request To {name} Became A Trainer </h2>
            <div className='main_content'>
                <div className="request_form">
                    <form noValidate className="p-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="cover" className="form-label">Cover Letter</label>
                            <textarea name="content[message]" id="cover" className='form-control' placeholder='Cover Letter'
                                      ref={register({required: true})}/>
                            {errors.cover && (<p className='error'>Cover Letter is required*</p>)}
                            <input type="hidden" name='type' value='trainer_registration'
                                   ref={register({required: true})}/>
                            <input type="hidden" name='orgId' value={orgId} ref={register({required: true})}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Request</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    dispatchTrainerRequestAction: (content, type, orgId, onSuccess, onError) =>
        dispatch(trainerRequest({content, type, orgId}, onSuccess, onError)),
    dispatchGetOrgByIdAction: (orgId, onSuccess) =>
        dispatch(getOrgById(orgId, onSuccess))
})

export default connect(null, mapDispatchToProps)(TrainerRegistrationPage)

