import React from "react";
import {updateCourse} from "../../services/CourseService";
import {Link} from "react-router-dom";

const black = {
    color: "black"
};

class CourseCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {!this.state.editing &&
                    <div className="col-sm-1">
                        <a href="#" onClick={this.props.showCourseEditor} style={black}>
                            <span className="text-nowrap">
                                <h4 className="card-title">
                                    <Link to={`/course-editor/${this.state.course._id}`} style={black}>
                                        {this.state.course.title}
                                    </Link>
                                </h4>
                            </span>
                        </a>
                    </div>
                    }
                    {
                        this.state.editing &&
                        <input
                            onChange={(e) => this.setState({
                                course: {
                                    ...this.state.course,
                                    title: e.target.value
                                }
                            })}
                            value={this.state.course.title}/>
                    }
                </div>
                <div className="card-body">
                    <div className="col-sm-1 d-none d-sm-block">
                        <span className="text-nowrap">
                            <p className="card-text">
                                Jose Annunziato
                            </p>
                        </span>
                    </div>
                    <div className="col-sm-1 d-none d-sm-block">
                        <div>
                            <span className="text-nowrap">1-Feb-2020 6:00 PM</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="col-sm-1">
                        <div className="d-flex justify-content-between">
                            {!this.state.editing &&
                            <div className="p-2 bd-highlight">
                                <i className="fa fa-fw fa-lg fa-pencil" onClick={() => this.setState({editing: true})}/>
                            </div>
                            }
                            {this.state.editing &&
                            <div className="p-2 bd-highlight">
                                <span className="text-nowrap">
                                <i className="fa fa-lg fa-fw fa-save" onClick={(e) => {
                                    updateCourse(this.state.course._id, this.state.course).then(status => {
                                    });
                                    this.setState({
                                        editing: false
                                    })
                                }}/>
                                <i className="fa fa-fw fa-lg fa-trash"
                                   onClick={() => this.props.deleteCourse(this.props.course)}/>
                                </span>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseCardComponent
