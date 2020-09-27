import {API_URL, API_URL_LESSONS, API_URL_MODULES} from "../common/Constants";

export const findModuleForCourse = (courseId) =>
    fetch(`${API_URL}/${courseId}/modules`)
        .then(response => response.json());

export const deleteModule = (moduleId) =>
    fetch(`${API_URL_MODULES}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export const createModule = (courseId) =>
    fetch(`${API_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify({title: "New Module"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const updateModule = async (moduleId, module) => {
    const response = await fetch(`${API_URL_MODULES}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findModule = async (moduleId) => {
    return fetch(`${API_URL_MODULES}/${moduleId}`)
        .then(response => response.json())
};

export default {
    deleteModule,
    findModuleForCourse,
    createModule,
    updateModule,
    findModule
}