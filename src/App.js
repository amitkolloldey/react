import React from 'react'
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import Spinner from "./components/spinner/spinner.component";
import {connect} from "react-redux";
import {ToastContainer, Slide, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {logOut} from "./redux/actions/authActions";
import Sidebar from "./components/sidebar.component";
import Routes from "./Routes";



const App = ({user, dispatchLogoutAction}) => {

    return (
        <div className={(!user.isloggedin ? 'not_logged_in_wrapper' : '')}>
            <Sidebar user={user} dispatchLogoutAction={dispatchLogoutAction}/>
            <div className='right_content'>
                <ToastContainer position="top-right" autoClose={2000} transition={Slide}/>
                <Spinner/>
                <Header/>
                <Routes user={user}/>
                <Footer/>
            </div>
        </div>

    )
}
const mapDispatchToProps = (dispatch) => ({
    dispatchLogoutAction: () => {
        dispatch(logOut());
        toast.success('You are logged out!');
    }
})

const mapStateToProps = (state) => ({
    user: state.user
});


export default connect(mapStateToProps, mapDispatchToProps)(App);