import {CREATE_TOPIC, DELETE_TOPIC} from "../actions/topicActions";
import {FIND_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../actions/topicActions";

const initialState = {
    topics: [
        {title: "Server Error", id: "000"}
    ]
};

const topicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            };
        case FIND_TOPIC:
            return {
                topics: action.topics
            };
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            };
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            };
        case UPDATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            };
        default:
            return state
    }
};

export default topicReducer