import {API_URL, API_URL_LESSONS, API_URL_TOPICS, API_URL_LOCAL} from "../common/Constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(`${API_URL_LOCAL}/lessons/${lessonId}/topics`)
        .then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${API_URL_LOCAL}/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export const createTopic = (lessonId,topic) =>
    fetch(`${API_URL_LOCAL}/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const updateTopic = async (topicId, topic) => {
    const response = await fetch(`${API_URL_LOCAL}/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findTopic = async (topicId) => {
    return fetch(`${API_URL_LOCAL}/${topicId}`)
        .then(response => response.json())
};

export default {
    deleteTopic,
    findTopicsForLesson,
    createTopic,
    updateTopic,
    findTopic
}