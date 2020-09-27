import React from "react";
import {updateTopic} from "../../services/TopicService";
import {Link} from "react-router-dom";

const black = {
    color: "black"
};

class TopicPillsItemComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        topic: this.props.topic
    };

    render() {
        return (
            <Link
                to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.state.topic.id}`}
                style={black}>
                <li
                    onClick={this.props.select}
                    className={`list-group-item ${this.props.active ? 'active' : ''}`}>
                    <div className="d-flex d-flex justify-content-between">
                        {!this.state.editing &&
                        <div className="col-sm-1">
                            <a href="#" onClick={this.props.showCourseEditor} style={black}>
                            <span className="text-nowrap">
                                {this.state.topic.title}
                            </span>
                            </a>
                        </div>
                        }
                        {
                            this.state.editing &&
                            <div>
                                <input
                                    onChange={(e) => this.setState({
                                        topic: {
                                            ...this.state.topic,
                                            title: e.target.value
                                        }
                                    })}
                                    value={this.state.topic.title}/>
                            </div>
                        }
                        {
                            this.state.editing &&
                            <div>
                                <i className="fa fa-lg fa-fw fa-save" onClick={(e) => {
                                    updateTopic(this.state.topic.id, this.state.topic).then(status => {
                                        this.setState({editing: false})
                                    });
                                }}/>
                            </div>
                        }
                        {
                            this.state.editing &&
                            <div>
                                <i className="fa fa-fw fa-lg fa-trash"
                                   onClick={() => this.props.deleteTopic(this.state.topic).then(status => {
                                       this.setState({editing: false})
                                   })}
                                />
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

export default TopicPillsItemComponent