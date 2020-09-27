export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
});
export const CREATE_TOPIC = "CREATE_TOPIC";

export const updateTopic = (topicId,topic) => ({
    type: UPDATE_TOPIC,
    topicId: topicId
});
export const UPDATE_TOPIC = "UPDATE_TOPIC";

export let deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
});
export const DELETE_TOPIC = "DELETE_TOPIC";

export let findTopicsForLesson = (actualTopics) => ({
    type: FIND_TOPICS_FOR_LESSON,
    topics: actualTopics
});
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";

export let findTopic = (actualTopic) => ({
    type: FIND_TOPIC,
    topic: actualTopic
});
export const FIND_TOPIC = "FIND_TOPIC";