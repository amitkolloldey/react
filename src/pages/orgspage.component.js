import React, {useEffect} from 'react'
import {connect} from "react-redux";
import Orgs from "../components/orgs.component";
import {fetchAllOrgs} from '../redux/actions/orgAction';

const OrgsPage = ({loading, orgs, dispatchFetchAllOrgsAction}) => {
    useEffect(() => dispatchFetchAllOrgsAction(), [dispatchFetchAllOrgsAction]);
    return (
        <div className='right_wrapper'>
            <h2 className='page_title'>All Listed Organizations</h2>
            <div className='main_content'>
                <Orgs orgs={orgs}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    orgs: state.orgs,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    dispatchFetchAllOrgsAction: () => dispatch(fetchAllOrgs())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrgsPage)

