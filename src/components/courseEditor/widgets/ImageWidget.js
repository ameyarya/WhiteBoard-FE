import React from "react";

class ImageWidget extends React.Component {

    state = {
        editing: this.props.editing,
        widget: this.props.widget
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.editing !== this.props.editing) {
            this.setState({
                editing: this.props.editing
            })
        }
    }

    render() {
        return (
            <div className="card container-fluid">
                <div className="card-body">
                    {
                        !this.props.readOnly &&
                        <div className="d-flex flex-row justify-content-between">
                            <div className="p-3">
                                <h3>
                                    Image Widget
                                </h3>
                            </div>
                            <div className="p-2">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="p-1">
                                        <button className="btn btn-success" type="button" onClick={() =>
                                            this.props.saveWidget(this.state.widget)}>Save
                                        </button>
                                    </div>
                                    <div className="p-1">
                                        <button className="btn btn-warning" type="button"
                                                onClick={this.props.moveWidgetUp}>
                                            <i className="fa fa-arrow-up"/>
                                        </button>
                                    </div>
                                    <div className="p-1">
                                        <button className="btn btn-warning" type="button"
                                                onClick={this.props.moveWidgetDown}>
                                            <i className="fa fa-arrow-down"/>
                                        </button>
                                    </div>
                                    <div className="p-1">
                                        <select className="custom-select"
                                                onChange={(e) => {
                                                    const newType = e.target.value;
                                                    this.setState(prevState => {
                                                        this.state.widget.type = newType;
                                                        return {
                                                            widget: {
                                                                ...this.props.widget,
                                                                type: newType
                                                            }
                                                        }
                                                    });
                                                    this.props.updateWidget(this.state.widget.id, this.state.widget)
                                                }} value={this.state.widget.type}>
                                            <option value="HEADING">Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                            <option value="LIST">List</option>
                                            <option value="IMAGE">Image</option>
                                        </select>
                                    </div>
                                    <div className="p-1">
                                        <button className="btn btn-danger" type="button" onClick={() =>
                                            this.props.deleteWidget(this.props.widget.id)}>
                                            <i className="fa fa-times"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        !this.props.readOnly &&
                        <div className="form-group">
                            <div className="p-2">
                                <div className="form-group">
                                    <input className="form-control"
                                           onChange={(e) => this.setState({
                                               widget: {
                                                   ...this.state.widget,
                                                   url: e.target.value
                                               }
                                           })}
                                           value={this.state.widget.url}
                                            placeholder={"https://loremflickr.com/g/320/240/paris"}
                                    />
                                </div>
                            </div>
                            <div className="p-2">
                                <input className="form-control" placeholder="Widget Name"/>
                            </div>
                            <hr/>
                        </div>
                    }
                    {
                        !this.props.readOnly &&
                        <div className="container-fluid">
                            <div>
                                <h3>
                                    Preview
                                </h3>
                            </div>
                        </div>
                    }
                    <div className="container-fluid">
                        <div>
                            <img src={this.props.widget.url}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageWidget;
