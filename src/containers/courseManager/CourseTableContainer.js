import React from "react";
import CourseTableRowComponent from "../../components/courseManager/CourseTableRowComponent";

const CourseTableContainer = ({courses, deleteCourse, showCourseEditor}) =>
    <div>
        <div className="container-fluid">
            <div className="card bg-secondary container-fluid p-3">
                <div className="card bg-white container-fluid p-3">
                    <div className="d-flex d-flex justify-content-between">
                        <div className="col-sm-1 wbdv-header wbdv-title">
                                        <span className="text-nowrap">
                                        <b>Title</b>
                                        </span>
                        </div>
                        <div className="col-sm-1 d-none d-sm-block wbdv-header wbdv-owner">
                                        <span className="text-nowrap">
                                            <b>Owned By</b>
                                        </span>
                        </div>
                        <div className="col-sm-1 d-none d-sm-block wbdv-header wbdv-last-modified">
                                        <span className="text-nowrap">
                                            <b>Last Modified</b>
                                        </span>
                        </div>
                        <div className="col-sm-1">
                                        <span className="text-nowrap">
                                            <b>Operations</b>
                                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-secondary container-fluid p-3">
                <ul className="list-group">
                    {
                        courses.map(function (course, index) {
                            return <CourseTableRowComponent
                                showCourseEditor={showCourseEditor}
                                deleteCourse={deleteCourse}
                                key={course._id}
                                course={course}/>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>;

export default CourseTableContainer
