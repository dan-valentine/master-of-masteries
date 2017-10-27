import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getList, addTask, completeTask } from '../ducks/reducer';
import Task from './Task';

class List extends Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
        this.addNewTask = this.addNewTask.bind(this);
    }

    changeTitle(newTask) {
        this.setState({ newTask })
    }

    componentDidMount() {
        this.props.getList();
    }

    addNewTask() {
        this.props.addTask(this.state.newTask)
        this.changeTitle('');
    }

    render() {
        let taskArr = this.props.list.map(task => (
            <Task task={task} />
        ))
        return (
            <div>
                <div>
                    <input
                        value={this.state.newTask}
                        onChange={e => this.changeTitle(e.target.value)}>
                    </input>

                    <button onClick={this.addNewTask}>add</button>
                </div>
                <div>{taskArr}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps, { getList, addTask, completeTask })(List)