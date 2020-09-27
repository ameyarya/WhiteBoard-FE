const widgets = [
    {id: "123", title: "W123"}
];

const widgetReducer = (
    state = {widgets: widgets}, action) => {
    let index;
    switch (action.type) {
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            };
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            };
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets.sort(function(a, b){return a.orderWidget - b.orderWidget})
            };
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            };
        case 'WIDGET_POSITION_UP':
            index = state.widgets.indexOf(action.widget);
            state.widgets.splice(index - 1, 0, state.widgets.splice(index, 1)[0]);
            return {
                widgets: state.widgets.splice(0)
            };
        case 'WIDGET_POSITION_DOWN':
            index = state.widgets.indexOf(action.widget);
            state.widgets.splice(index + 1, 0, state.widgets.splice(index, 1)[0]);
            return {
                widgets: state.widgets.splice(0)
            };
        case "SAVE_ALL":
            state.widgets.map(widget => {
                let i = state.widgets.indexOf(widget);
                console.log(i);
                widget.order_widget = i;
            });
            return{
                widgets: state.widgets
            };
        default:
            return state
    }
};

export default widgetReducer
