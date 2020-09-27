import {
    CREATE_LESSON,
    DELETE_LESSON,
    FIND_LESSON,
    FIND_LESSONS_FOR_MODUlE,
    UPDATE_LESSON
} from "../actions/lessonActions";

const initialState = {
    lessons: [
        {title: "Lesson 000", _id: "000"},
        {title: "Lesson 123", _id: "123"},
    ]
};

const lessonReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_LESSONS_FOR_MODUlE:
            return {
                lessons: action.lessons
            };
        case FIND_LESSON:
            return {
                lessons: action.lessons
            };
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            };
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            };
        case UPDATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            };
        default:
            return state
    }
};

export default lessonReducer