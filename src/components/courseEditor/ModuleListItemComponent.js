import React from "react";
import {updateModule} from "../../services/ModuleService";
import {Link} from "react-router-dom";

const black = {
    color: "black"
};

class ModuleListItemComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        module: this.props.module
    };

    render() {
        return (
            <Link to={`/course-editor/${this.props.courseId}/module/${this.state.module._id}`}
                  style={black}>
                    <li
                        onClick={this.props.select}
                        className={`list-group-item ${this.props.active ? 'active':''}`}>
                    <div className="d-flex d-flex justify-content-between">
                        {!this.state.editing &&
                        <div className="col-sm-1">
                            <a href="#" onClick={this.props.showCourseEditor} style={black}>
                            <span className="text-nowrap">
                                {this.state.module.title}
                            </span>
                            </a>
                        </div>
                        }
                        {
                            this.state.editing &&
                            <div>
                                <input
                                    onChange={(e) => this.setState({
                                        module: {
                                            ...this.state.module,
                                            title: e.target.value
                                        }
                                    })}
                                    value={this.state.module.title}/>
                            </div>
                        }
                        {
                            this.state.editing &&
                            <div>
                                <i className="fa fa-lg fa-fw fa-save" onClick={(e) => {
                                    updateModule(this.state.module._id, this.state.module).then(status => {
                                    });
                                    this.setState({
                                        editing: false
                                    })
                                }}/>
                            </div>
                        }
                        {
                            this.state.editing &&
                            <div>
                                <i className="fa fa-fw fa-lg fa-trash"
                                   onClick={() => this.props.deleteModule(this.state.module)}/>
                            </div>
                        }
                        {
                            !this.state.editing &&
                            <div>
                                <i className="fa fa-fw fa-lg fa-pencil"
                                   onClick={() => this.setState({editing: true})}/>
                            </div>
                        }
                    </div>
                </li>
            </Link>
        );
    }
}

export default ModuleListItemComponent
