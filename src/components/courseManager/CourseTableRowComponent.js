import React from "react";
import {updateCourse} from "../../services/CourseService";
import courseHighlight from "../../css/courseHighlight.css";
import {Link} from "react-router-dom";

const black = {
    color: "black"
};

class CourseTableRowComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    };

    render() {
        return (
            <li className="list-group-item wbdv-row wbdv-course" style={courseHighlight}>
                <div className="d-flex d-flex justify-content-between">
                    {!this.state.editing &&
                    <div className="col-sm-1">
                        <Link to={`/course-editor/${this.state.course._id}`} style={black}>
                            <span className="text-nowrap">
                                    {this.state.course.title}
                            </span>
                        </Link>
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
                    <div className="col-sm-1 d-none d-sm-block">
                        <span className="text-nowrap">Jose Annunziato</span>
                    </div>
                    <div className="col-sm-1 d-none d-sm-block">
                        <div>
                            <span className="text-nowrap">1-Feb-2020 6:00 PM</span>
                        </div>
                    </div>
                    {!this.state.editing &&
                    <div className="col-sm-1">
                        <i className="fa fa-fw fa-lg fa-pencil" onClick={() => this.setState({editing: true})}/>
                    </div>
                    }
                    {this.state.editing &&
                    <div className="col-sm-1">
                        <i className="fa fa-lg fa-fw fa-save" onClick={(e) => {
                            updateCourse(this.state.course._id, this.state.course).then(status => {
                            });
                            this.setState({
                                editing: false
                            })
                        }}/>
                        <i className="fa fa-fw fa-lg fa-trash"
                           onClick={() => this.props.deleteCourse(this.props.course)}/>
                    </div>
                    }
                </div>
            </li>
        )
    }
}

export default CourseTableRowComponent
