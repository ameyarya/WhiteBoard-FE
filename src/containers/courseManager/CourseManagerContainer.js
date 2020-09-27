import React from "react";
import CourseEditorContainer from "../courseEditor/CourseEditorContainer";
import {deleteCourse, createCourse, findAllCourses} from "../../services/CourseService"
import Navigation from "../../common/Navigation";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CourseManagerHeaderContainer from "./CourseManagerHeaderContainer";

class CourseManagerContainer extends React.Component {

    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: 'New Course',
        courses: []
    };

    alertFunction = () => {
        alert("Side Bar Coming Soon!")
    };

    componentDidMount = async () => {

        const allCourses = await findAllCourses();
        this.setState({
            courses: allCourses
        })

    };

    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id);
        const courses = await findAllCourses();
        this.setState({
            courses: courses
        })
    };

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    };

    showCourseEditor = () =>
        this.setState({
            editingCourse: true
        });

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        });

    addCourse = async () => {
        const newCourse = {
            title: this.state.newCourseTitle
        }
        const actualCourse = await createCourse(newCourse);
        console.log(actualCourse);
        const allCourses = await findAllCourses();
        this.setState({
            courses: allCourses
        })
    };

    updateForm = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        });

    render() {
        return (
            <div>
                {<Navigation/>}
                <Router>
                    <Route
                        path="/course-editor/:courseId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorContainer
                                courseId={props.match.params.courseId}
                                {...props}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorContainer
                                {...props}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorContainer
                                {...props}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorContainer
                                {...props}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                topicId={props.match.params.topicId}/>
                        }/>
                    <Route
                        path="/"
                        exact={true}
                        render={() =>
                            <CourseManagerHeaderContainer
                                alertFunction={this.alertFunction}
                                toggle={this.toggle}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newCourseTitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                showCourseEditor={this.showCourseEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                            />
                        }/>
                </Router>
            </div>
        )
    }
}

export default CourseManagerContainer
