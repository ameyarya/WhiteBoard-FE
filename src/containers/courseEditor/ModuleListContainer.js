import React from "react";
import {connect} from "react-redux";
import {createModule, deleteModule, updateModule, findModule, findModulesForCourses} from "../../actions/moduleActions";
import moduleService from '../../services/ModuleService'
import ModuleListItemComponent from "../../components/courseEditor/ModuleListItemComponent";

class ModuleListContainer extends React.Component {

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId).then(r => null)
    }

    state = {
        activeModuleId: this.props.moduleId
    };

    render() {
        return (
            <ul className="list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(module =>
                        <ModuleListItemComponent
                            key={module._id}
                            module={module}
                            deleteModule={this.props.deleteModule}
                            courseId={this.props.courseId}
                            select={() => {
                                this.setState({
                                    activeModuleId: module._id
                                })
                            }}
                            active={module._id === this.state.activeModuleId}
                        />
                    )
                }
                <br/>
                <div className="d-flex flex-row justify-content-end">
                    <button className="btn btn-danger wbdv-module-item-add-btn" type="button" onClick={
                        () => this.props.createModule(this.props.courseId)}>
                        <i className="fa fa-plus fa-lg"/>
                    </button>
                </div>
            </ul>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch(findModulesForCourses(actualModules))),
        findModule: (moduleId) =>
            moduleService.findModule(moduleId)
                .then(actualModule =>
                    dispatch(findModule(actualModule))),
        deleteModule: (module) =>
            moduleService.deleteModule(module._id)
                .then(status =>
                    dispatch(deleteModule(module._id))),
        createModule: (courseId) => {
            moduleService.createModule(courseId)
                .then(actualModule =>
                    dispatch(createModule(actualModule)))
        },
        updateModule: (moduleId, module) => {
            moduleService.updateModule(moduleId, module)
                .then(actualModule => dispatch(updateModule(moduleId, module)))
        }
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListContainer)

