export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
});
export const CREATE_MODULE = "CREATE_MODULE";

export const updateModule = (moduleId,module) => ({
    type: UPDATE_MODULE,
    moduleId: moduleId
});
export const UPDATE_MODULE = "UPDATE_MODULE";

export let deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
});
export const DELETE_MODULE = "DELETE_MODULE";

export let findModulesForCourses = (actualModules) => ({
    type: FIND_MODULES_FOR_COURSE,
    modules: actualModules
});
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";

export let findModule = (actualModule) => ({
    type: FIND_MODULE,
    module: actualModule
});
export const FIND_MODULE = "FIND_MODULE";



