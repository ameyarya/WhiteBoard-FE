import React from "react";
import TopicPillItemComponent from "../../components/courseEditor/TopicPillsItemComponent";
import {connect} from "react-redux";
import topicService from "../../services/TopicService";
import {
    createTopic,
    deleteTopic,
    findTopic,
    findTopicsForLesson,
    updateTopic
} from "../../actions/topicActions";

class TopicPillsContainer extends React.Component {

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId).then(r => null)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId).then(r => null)
        }
    }

    state = {
        activeTopicId: this.props.topicId
    };

    render() {
        return (
            <ul className="nav nav-pills">
                {
                    this.props.topics && this.props.topics.map(topic =>
                        <TopicPillItemComponent
                            key={topic.id}
                            topic={topic}
                            deleteTopic={this.props.deleteTopic}
                            courseId={this.props.courseId}
                            moduleId={this.props.moduleId}
                            lessonId={this.props.lessonId}
                            select={() => {
                                this.setState({
                                    activeTopicId: topic.id
                                })
                            }}
                            active={topic.id === this.state.activeTopicId}
                        />
                    )
                }
                <br/>
                <div className="d-flex flex-row justify-content-end">
                    <button className="btn" type="button" onClick={
                        () => this.props.createTopic(this.props.lessonId,{title: 'New Topic'})}>
                        <i className="fa fa-plus fa-lg"/>
                    </button>
                </div>
            </ul>

        );
    }
}

const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) =>
            topicService.findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch(findTopicsForLesson(actualTopics))),
        findTopic: (topicId) =>
            topicService.findTopic(topicId)
                .then(actualTopic =>
                    dispatch(findTopic(actualTopic))),
        deleteTopic: (topic) =>
            topicService.deleteTopic(topic.id)
                .then(status =>
                    dispatch(deleteTopic(topic.id))),
        createTopic: (lessonId,topic) => {
            topicService.createTopic(lessonId,topic)
                .then(actualTopic =>
                    dispatch(createTopic(actualTopic)))
        },
        updateTopic: (topicId, topic) => {
            topicService.updateTopic(topicId, topic)
                .then(actualTopic => dispatch(updateTopic(topicId, topic)))
        }
    }
};


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicPillsContainer)