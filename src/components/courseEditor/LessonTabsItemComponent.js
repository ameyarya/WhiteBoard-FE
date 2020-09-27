import React from "react";
import {updateLesson} from "../../services/LessonService";
import {Link} from "react-router-dom";

const black = {
    color: "black"
};

class LessonTabItemComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        lesson: this.props.lesson
    };

    render() {
        return (
            <Link
                to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.state.lesson._id}`}
                style={black}>
                <li
                    onClick={this.props.select}
                    className={`list-group-item ${this.props.active ? 'active' : ''}`}>
                    <div className="d-flex d-flex justify-content-between">
                        {!this.state.editing &&
                        <div className="col-sm-1">
                            <a href="#" onClick={this.props.showCourseEditor} style={black}>
                            <span className="text-nowrap">

                                    {this.state.lesson.title}

                            </span>
                            </a>
                        </div>
                        }
                        {
                            this.state.editing &&
                            <div>
                                <input
                                    onChange={(e) => this.setState({
                                        lesson: {
                                            ...this.state.lesson,
                                            title: e.target.value
                                        }
                                    })}
                                    value={this.state.lesson.title}/>
                            </div>
                        }
                        {
                            this.state.editing &&
                            <div>
                                <i className="fa fa-lg fa-fw fa-save" onClick={(e) => {
                                    updateLesson(this.state.lesson._id, this.state.lesson).then(status => {
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
                                   onClick={() => this.props.deleteLesson(this.state.lesson)}/>
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
        )
    }

}

export default LessonTabItemComponent