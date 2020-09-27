import {createTopic, deleteTopic, findTopic, findTopicsForLesson, updateTopic} from "./TopicService";
import {API_URL_LOCAL} from "../common/Constants";

export const findWidgetsForTopic = (topicId) =>
    fetch(`https://protected-everglades-80728.herokuapp.com//topics/${topicId}/widgets`)
        .then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`https://protected-everglades-80728.herokuapp.com//widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json());

export const findWidget = async (widgetId) =>
    fetch(`https://protected-everglades-80728.herokuapp.com//widgets/${widgetId}`)
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`https://protected-everglades-80728.herokuapp.com//widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json());

export const createWidget = (topicId,widget) =>
    fetch(`${API_URL_LOCAL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export default {
    deleteWidget,
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    findWidget
}