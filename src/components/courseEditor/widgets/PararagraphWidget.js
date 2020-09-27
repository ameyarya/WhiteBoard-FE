import React from "react";

class ParagraphWidget extends React.Component {

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
                                    Paragraph Widget
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
                                <textarea className="form-control"
                                          onChange={(e) => this.setState({
                                              widget: {
                                                  ...this.state.widget,
                                                  title: e.target.value
                                              }
                                          })}
                                          value={this.state.widget.title}/>
                                </div>
                            </div>
                            <div className="p-2">
                                <select className="custom-select"
                                        onChange={(e) => {
                                            const newSize = parseInt(e.target.value);
                                            this.setState(prevState => {
                                                prevState.widget.size = newSize;
                                                return prevState
                                            })
                                        }}
                                        value={this.state.widget.size}>
                                    <option value={1}>Heading 1</option>
                                    <option value={2}>Heading 2</option>
                                    <option value={3}>Heading 3</option>
                                    <option value={4}>Heading 4</option>
                                    <option value={5}>Heading 5</option>
                                    <option value={6}>Heading 6</option>
                                </select>
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
                            {this.props.widget.size === 1 && <h1>{this.props.widget.title}</h1>}
                            {this.props.widget.size === 2 && <h2>{this.props.widget.title}</h2>}
                            {this.props.widget.size === 3 && <h3>{this.props.widget.title}</h3>}
                            {this.props.widget.size === 4 && <h4>{this.props.widget.title}</h4>}
                            {this.props.widget.size === 5 && <h5>{this.props.widget.title}</h5>}
                            {this.props.widget.size === 6 && <h6>{this.props.widget.title}</h6>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParagraphWidget;
