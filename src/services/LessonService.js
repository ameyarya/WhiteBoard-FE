import {API_URL, API_URL_LESSONS, API_URL_MODULES} from "../common/Constants";

export const findLessonsForModule = (moduleId) =>
    fetch(`${API_URL_MODULES}/${moduleId}/lessons`)
        .then(response => response.json());

export const deleteLesson = (lessonId) =>
    fetch(`${API_URL_LESSONS}/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export const createLesson = (moduleId) =>
    fetch(`${API_URL_MODULES}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify({title: "New Lesson"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const updateLesson = async (lessonId, lesson) => {
    const response = await fetch(`${API_URL_LESSONS}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findLesson = async (lessonId) => {
    return fetch(`${API_URL_LESSONS}/${lessonId}`)
        .then(response => response.json())
};

export default {
    deleteLesson,
    findLessonsForModule,
    createLesson,
    updateLesson,
    findLesson
}