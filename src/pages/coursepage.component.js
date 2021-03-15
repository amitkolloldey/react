import React, {useEffect} from 'react'
import {connect} from "react-redux";
import Courses from "../components/courses.component";
import {fetchAllCourses} from '../redux/actions/courseAction';

const CoursePage = ({loading, courses, dispatchFetchAllCoursesAction}) => {
    useEffect(() => dispatchFetchAllCoursesAction(), [dispatchFetchAllCoursesAction]);
    return (
        <div className='right_wrapper'>
            <h2 className='page_title'>All Listed Courses</h2>
            <div className='main_content'>
                <Courses courses={courses}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    courses: state.courses,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    dispatchFetchAllCoursesAction: () => dispatch(fetchAllCourses())
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)

