import React from "react";
import CourseCardComponent from "../../components/courseManager/CourseCardComponent";

const CourseGridContainer = ({courses, deleteCourse, showCourseEditor}) =>

    <div>
        <div className="container-fluid">
            <div className="card bg-secondary p-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 p-3">
                    {
                        courses.map(function (course, index) {
                            return <CourseCardComponent
                                showCourseEditor={showCourseEditor}
                                deleteCourse={deleteCourse}
                                key={course._id}
                                course={course}/>
                        })
                    }
                </div>

            </div>
        </div>
    </div>;

export default CourseGridContainer
