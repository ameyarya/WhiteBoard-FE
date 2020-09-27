export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
});
export const CREATE_LESSON = "CREATE_LESSON";

export const updateLesson = (lessonId,lesson) => ({
    type: UPDATE_LESSON,
    lessonId: lessonId
});
export const UPDATE_LESSON = "UPDATE_LESSON";

export let deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
});
export const DELETE_LESSON = "DELETE_LESSON";

export let findLessonsForModules = (actualLessons) => ({
    type: "FIND_LESSONS_FOR_MODUlE",
    lessons: actualLessons
});
export const FIND_LESSONS_FOR_MODUlE = "FIND_LESSONS_FOR_MODUlE";

export let findLesson = (actualLesson) => ({
    type: FIND_LESSON,
    lesson: actualLesson
});
export const FIND_LESSON = "FIND_LESSON";

