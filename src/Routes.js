import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import TrainerRegistrationPage from "./pages/trainerregistrationpage.component";
import OrgsPage from "./pages/orgspage.component";
import DashboardPage from "./pages/dashboard.component";
import ResetPage from "./pages/resetpage.component";
import EnterResetPage from "./pages/enterresetemailpage.component";
import OtpPage from "./pages/otppage.component";
import RegisterPage from "./pages/registerpage.component";
import LoginPage from "./pages/loginpage.component";
import OrgSinglePage from "./pages/orgsinglepage.component";
import RequestsPage from "./pages/requestspage.component";
import ProfilePage from "./pages/profilepage.component";
import CoursePage from "./pages/coursepage.component";
import TraineeRegistrationPage from "./pages/traineeregistrationpage.component";

const Routes = (props) => {
    return <>
        {
            !props.user.isloggedin ? (
                <Switch>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/register' component={RegisterPage}/>

                    <Route exact path='/otp' component={OtpPage}/>
                    <Route exact path='/reset' component={ResetPage}/>
                    <Route exact path='/enteremail' component={EnterResetPage}/>

                    <Redirect to='/login'/>
                </Switch>
            ) : (
                <Switch>
                    <Route exact path='/' component={DashboardPage}/>
                    <Route exact path='/orgs' component={OrgsPage}/>
                    <Route exact path='/courses' component={CoursePage}/>
                    <Route exact path='/trainer_registration/:orgId' component={TrainerRegistrationPage}/>
                    <Route exact path='/trainee_registration/:courseId' component={TraineeRegistrationPage}/>
                    <Route exact path='/orgs/:orgId' component={OrgSinglePage}/>
                    <Route exact path='/requests' component={RequestsPage}/>
                    <Route exact path='/requests/:reqId' component={RequestsPage}/>
                    <Route exact path={'/profilepage/' + props.user.userId} component={ProfilePage}/>

                    <Route exact path='/otp' component={OtpPage}/>
                    <Route exact path='/reset' component={ResetPage}/>
                    <Route exact path='/enteremail' component={EnterResetPage}/>

                    <Redirect to='/'/>
                </Switch>
            )
        }
    </>;
}

export default Routes;