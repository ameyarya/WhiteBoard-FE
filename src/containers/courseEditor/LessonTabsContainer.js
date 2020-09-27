import React from "react";
import LessonTabItemComponent from "../../components/courseEditor/LessonTabsItemComponent";
import {connect} from "react-redux";
import lessonService from "../../services/LessonService";
import {createLesson, deleteLesson, findLesson, findLessonsForModules, updateLesson} from "../../actions/lessonActions";

class LessonTabsContainer extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId).then(r => null);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId).then(r => null);
        }
    }

    state = {
        activeLessonId: this.props.lessonId
    };

    render() {
        return (
            <ul className="nav">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <LessonTabItemComponent
                            key={lesson._id}
                            lesson={lesson}
                            deleteLesson={this.props.deleteLesson}
                            courseId={this.props.courseId}
                            moduleId={this.props.moduleId}
                            select={() => {
                                this.setState({
                                    activeLessonId: lesson._id
                                })
                            }}
                            active={lesson._id === this.state.activeLessonId}
                        />
                    )
                }
                <br/>
                <div className="d-flex flex-row justify-content-end">
                    <button className="btn" type="button" onClick={
                        () => this.props.createLesson(this.props.moduleId)}>
                        <i className="fa fa-plus fa-lg"/>
                    </button>
                </div>
            </ul>

        );
    }
}

const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch(findLessonsForModules(actualLessons))),
        findLesson: (lessonId) =>
            lessonService.findLesson(lessonId)
                .then(actualLessons =>
                    dispatch(findLesson(actualLessons))),
        deleteLesson: (lesson) =>
            lessonService.deleteLesson(lesson._id)
                .then(status =>
                    dispatch(deleteLesson(lesson._id))),
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId)
                .then(actualLesson =>
                    dispatch(createLesson(actualLesson)))
        },
        updateLesson: (lessonId, lesson) => {
            lessonService.updateLesson(lessonId, lesson)
                .then(actualLesson => dispatch(updateLesson(lessonId, lesson)))
        }
    }
};


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonTabsContainer)