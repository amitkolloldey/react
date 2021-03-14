import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {fetchAllOrgs, getOrgById} from '../redux/actions/orgAction';
import Orgs from "../components/orgs.component";

const OrgSinglePage = ({loading, match, dispatchGetOrgByIdAction, dispatchFetchAllOrgsAction, orgs}) => {

    const [name, setName] = useState('');
    const [key_people, setKeyPeople] = useState('');
    const [users, setUsers] = useState('');
    const [logo, setLogo] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    const {orgId} = match.params;
    useEffect(() => dispatchFetchAllOrgsAction(), [dispatchFetchAllOrgsAction]);
    useEffect(() => {
        if (orgId) {
            dispatchGetOrgByIdAction(orgId, (response) => {
                setName(response.data.name);
                setLogo(response.data.logo);
                setKeyPeople(response.data.key_people);
                setDescription(response.data.description);
                console.log(key_people)
                console.log(users)
            });
        }
    }, [dispatchGetOrgByIdAction, match.params]);

    return (
        <div className='right_wrapper'>
            <div className='main_content'>
                <div className="single_page">
                    <div className="page_header">
                        <center>
                            <img
                                src={process.env.PUBLIC_URL + '/dgfp.png'}
                                className="org_logo"/>
                            <h3 className="media-heading">{name}</h3>
                        </center>
                    </div>
                    <div className="page_body">
                        {description}
                    </div>
                    <div className="page_cards">
                        <h2 className='page_title'>Courses Provided By This Organization</h2>
                        <Orgs orgs={orgs}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    dispatchGetOrgByIdAction: (orgId, onSuccess) =>
        dispatch(getOrgById(orgId, onSuccess)),
    dispatchFetchAllOrgsAction: () => dispatch(fetchAllOrgs())
})

const mapStateToProps = (state) => ({
    orgs: state.orgs,
    loading: state.loading,
});


export default connect(mapStateToProps, mapDispatchToProps)(OrgSinglePage)

