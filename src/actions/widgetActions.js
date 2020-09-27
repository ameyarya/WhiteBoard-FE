export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    newWidget: widget
});
export const CREATE_WIDGET = "CREATE_WIDGET";

export const updateWidget = (widgetId,widget) => ({
    type: UPDATE_WIDGET,
    widgetId: widgetId
});
export const UPDATE_WIDGET = "UPDATE_WIDGET";

export let deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
});
export const DELETE_WIDGET = "DELETE_WIDGET";

export let findWidgetsForTopic = (actualWidgets) => ({
    type: FIND_WIDGETS_FOR_TOPIC,
    widgets: actualWidgets
});
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";

export let findWidget = (actualWidget) => ({
    type: FIND_WIDGET,
    widget: actualWidget
});
export const FIND_WIDGET = "FIND_WIDGET";

