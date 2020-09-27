import React from "react";
import ModuleListContainer from "./ModuleListContainer";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabsContainer from "./LessonTabsContainer";
import TopicPillsContainer from "./TopicPillsContainer";
import widgetReducer from "../../reducers/widgetReducer";
import WidgetListContainer from "./WidgetListContainer";

const white = {
    color: "white"
};

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
});

const store = createStore(rootReducer);

const CourseEditorContainer = ({hideCourseEditor, match, history, courseId, moduleId, lessonId, topicId}) =>
    <Provider store={store}>
        <div className="container-fluid">
            <div className="card container-fluid bg-dark text-white">
                <div className="d-flex d-flex justify-content-between">
                    <div className="p-2">
                        <div className="d-flex flex-row">
                            <div className="p-0">
                                <a className="navbar-brand wbdv-course-editor wbdv-close" href="#"
                                   style={white}>
                                    <a href="/">
                                        <i className="fa fa-times fa-lg" style={white}/>
                                    </a>
                                </a>
                            </div>
                            <div className="p-0">
                                <a className="nav-link wbdv-course-title" href="#">
                                    <h4 style={white}>
                                        Course Editor
                                        {/*{match.params.courseId}*/}
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="d-flex flex-row">
                            <div className="p-0">
                                <a className="nav-link" href="#">
                                    <h5 style={white}>Settings</h5>
                                </a>
                            </div>
                            <div className="p-0">
                                <a className="navbar-brand wbdv-new-page-btn" href="#" style={white}>
                                    <i className="fa fa-plus fa-lg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card bg-secondary container-fluid p-3">
                        <h5 style={white}>Modules</h5>
                        <ModuleListContainer
                            lessonId={lessonId}
                            moduleId={moduleId}
                            courseId={courseId}
                            topicId={topicId}
                        />
                    </div>
                </div>
                <div className="col-8">
                    <br/>
                    <h5>Lessons</h5>
                    {moduleId &&
                    <LessonTabsContainer
                        lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId}
                        topicId={topicId}/>
                    }
                    <br/>
                    <h5>Topics</h5>
                    {moduleId && lessonId &&
                    <TopicPillsContainer
                        lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId}
                        topicId={topicId}/>}
                    <br/>
                    <hr/>
                    {moduleId && lessonId && topicId &&
                    <WidgetListContainer
                        lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId}
                        topicId={topicId}/>}
                </div>
            </div>
        </div>
    </Provider>;


export default CourseEditorContainer
