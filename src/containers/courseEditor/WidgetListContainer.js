import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "../../components/courseEditor/widgets/HeadingWidget";
import ParagraphWidget from "../../components/courseEditor/widgets/PararagraphWidget";
import ListWidget from "../../components/courseEditor/widgets/ListWidget";
import ImageWidget from "../../components/courseEditor/widgets/ImageWidget";
import widgetService from "../../services/WidgetService";

class WidgetListContainer extends React.Component {

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        readOnly: false,
        widget: {
            title: ''
        }
    };

    ToggleButton(){
        this.setState((currentState) => ({
            readOnly: !currentState.readOnly,
        }));
    }

    saveWidget = (widget) => {
        this.setState(prevState => {
            return {
                widget: widget
            }
        });
        this.props.updateWidget(widget.id, widget);
    };

    saveAll = () =>
    {
        this.props.saveAll(this.props.widgets);
        this.props.widgets.map(widget => this.props.updateWidget(widget.id, widget))
    };

    render() {
        return (
            <div className="container-fluid bg-white">
                <div className="d-flex flex-row justify-content-end">
                    <div className="p-2">
                        <button className="btn btn-success" type="button" onClick={() =>
                            this.props.saveAll()}>Save All
                        </button>
                    </div>
                    <div className="p-2">
                        <h5>Preview</h5>
                    </div>
                    <div className="p-2">
                        <div className='custom-control custom-switch'>
                            <input
                                type='checkbox'
                                className='custom-control-input'
                                id='customSwitches'
                                readOnly
                                onClick={() => this.ToggleButton()}
                            />
                            <label className='custom-control-label' htmlFor='customSwitches'>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.props.widgets && this.props.widgets.map(widget =>
                            <div key={widget.id}>
                                <div className="d-flex flex-row justify-content-start">
                                    {
                                        widget.type === "HEADING" &&
                                        <HeadingWidget
                                            {...this.props}
                                            deleteWidget={this.props.deleteWidget}
                                            saveWidget={this.saveWidget}
                                            editing={widget.id === this.state.widget.id}
                                            widget={widget}
                                            readOnly = {this.state.readOnly}
                                            moveWidgetUp = {this.props.moveWidgetUp}
                                            moveWidgetDown = {this.props.moveWidgetDown}
                                        />
                                    }
                                    {
                                        widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget
                                            {...this.props}
                                            deleteWidget={this.props.deleteWidget}
                                            saveWidget={this.saveWidget}
                                            editing={widget.id === this.state.widget.id}
                                            widget={widget}
                                            readOnly = {this.state.readOnly}
                                            moveWidgetUp = {this.props.moveWidgetUp}
                                            moveWidgetDown = {this.props.moveWidgetDown}
                                        />
                                    }
                                    {
                                        widget.type === "LIST" &&
                                        <ListWidget
                                            {...this.props}
                                            deleteWidget={this.props.deleteWidget}
                                            saveWidget={this.saveWidget}
                                            editing={widget.id === this.state.widget.id}
                                            widget={widget}
                                            readOnly = {this.state.readOnly}
                                            moveWidgetUp = {this.props.moveWidgetUp}
                                            moveWidgetDown = {this.props.moveWidgetDown}
                                        />
                                    }
                                    {
                                        widget.type === "IMAGE" &&
                                        <ImageWidget
                                            {...this.props}
                                            deleteWidget={this.props.deleteWidget}
                                            saveWidget={this.saveWidget}
                                            editing={widget.id === this.state.widget.id}
                                            widget={widget}
                                            readOnly = {this.state.readOnly}
                                            moveWidgetUp = {this.props.moveWidgetUp}
                                            moveWidgetDown = {this.props.moveWidgetDown}
                                        />
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <br/>
                <div className="d-flex flex-row justify-content-end">
                    <button className="btn btn-danger" type="button" onClick={() =>
                        this.props.createWidget(this.props.topicId)}>
                        <i className="fa fa-plus fa-lg"/>
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
});

const dispatcherToPropertyMapper = (dispatch) => ({
    updateWidget: (wid, widget) =>
        fetch(`https://protected-everglades-80728.herokuapp.com//widgets/${wid}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(status => dispatch({
                type: 'UPDATE_WIDGET',
                widget: widget
            })),
    deleteWidget: (wid) =>
        fetch(`https://protected-everglades-80728.herokuapp.com//widgets/${wid}`, {
            method: "DELETE"
        }).then(response => response.json())
            .then(status => dispatch({
                type: 'DELETE_WIDGET',
                widgetId: wid
            })),
    createWidget: (topicId) =>
        widgetService.createWidget(topicId,{
            title: "New Widget",
            type: "HEADING"
        })
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),
    findWidgetsForTopic: (tid) =>
        fetch(`https://protected-everglades-80728.herokuapp.com//topics/${tid}/widgets`)
            .then(response => response.json())
            .then(actualWidgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: actualWidgets
            })),
    moveWidgetUp: () =>
        fetch("https://protected-everglades-80728.herokuapp.com//widgets")
            .then(response => response.json())
            .then(actualWidgets => dispatch({
                type: "WIDGET_POSITION_UP",
                widgets: actualWidgets
            })),
    moveWidgetDown: () =>
        fetch("https://protected-everglades-80728.herokuapp.com//widgets")
            .then(response => response.json())
            .then(actualWidgets => dispatch({
                type: "WIDGET_POSITION_DOWN",
                widgets: actualWidgets
            })),
    saveAll: () =>
        fetch("https://protected-everglades-80728.herokuapp.com//widgets")
            .then(response => response.json())
            .then(actualWidgets => dispatch({
                type: "SAVE_ALL",
                widgets: actualWidgets
            })),

});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(WidgetListContainer)