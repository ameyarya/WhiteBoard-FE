import CourseTable from "./CourseTableContainer";
import CourseGrid from "./CourseGridContainer";
import React from "react";

const white = {
    color: "white"
};

const CourseManagerHeaderContainer =
    ({
         alertFunction,
         toggle,
         updateForm,
         newCourseTitle,
         addCourse,
         layout,
         showCourseEditor,
         deleteCourse,
         courses
     }) =>
        <div>
            <div className="container-fluid">
                <div className="card container-fluid bg-dark text-white">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex d-flex justify-content-start">
                            <div className="p-2 align-self-center wbdv-field wbdv-hamburger">
                                <a className="navbar-brand wbdv-field wbdv-hamburger" href="#" style={white}>
                                    <i className="fa fa-bars" onClick={alertFunction}/>
                                </a>
                            </div>
                            <div className="p-2 align-self-center wbdv-label wbdv-course-manager">
                                <a className="nav-link wbdv-label wbdv-course-manager" href="#">
                                    <h5 style={white}>
                                            <span className="text-nowrap">
                                                <h4>Course Manager</h4>
                                            </span>
                                    </h5>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex d-flex justify-content-end">
                            <div className="p-2 align-self-center">
                                <button onClick={toggle} className="btn btn-primary">
                                    <i className="fa fa-th"/>
                                </button>
                            </div>
                            <div className="p-2 align-self-center">
                                <form className="form-inline my-2 my-lg-0 d-none d-sm-block">
                                    <input aria-label="Search"
                                           className="form-control mr-sm-2 wbdv-field wbdv-new-course"
                                           placeholder="New Course Title"
                                           type="search" onChange={updateForm}
                                           value={newCourseTitle}/>
                                    <button onClick={addCourse}
                                            className="btn btn-danger wbdv-button wbdv-add-course"
                                            type="submit">
                                        <i className="fa fa-plus"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {layout === 'table' &&
            <CourseTable
                showCourseEditor={showCourseEditor}
                deleteCourse={deleteCourse}
                courses={courses}/>}
            {layout === 'grid' &&
            <CourseGrid
                showCourseEditor={showCourseEditor}
                deleteCourse={deleteCourse}
                courses={courses}/>}
        </div>;

export default CourseManagerHeaderContainer
