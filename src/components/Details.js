import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getList, editTask, completeTask, deleteTask } from '../ducks/reducer';

class Details extends Component {
    constructor() {
        super();

        this.state = {
            task: {},
            newTitle: '',
            newDescription: ''
        }
    }

    changeTitle(newTitle) {
        this.setState({ newTitle })
    }

    changeDescription(newDescription) {
        this.setState({ newDescription })
    }

    cancel() {
        this.setState({
            newTitle: this.state.task.title,
            newDescription: this.state.task.description
        })
    }

    edit() {
        let task = {
            title: this.state.newTitle,
            description: this.state.newDescription
        }
        this.props.editTask(this.state.task.list_id, task).then(resp => {
            let tempTask = resp.value.find(task => task.list_id == this.props.match.params.id);
            if (tempTask) {
                this.setState({
                    task: tempTask,
                    newTitle: tempTask.title,
                    newDescription: tempTask.description
                })
            } else {
                this.props.history.push('/list/all')
            }
        });
    }

    delete() {

        this.props.deleteTask(this.state.task.list_id);
        this.props.history.push('/list/all');
    }

    complete() {
        this.props.completeTask(this.state.task.list_id);
        this.props.history.push('/list/all')
    }

    componentDidMount() {
        this.props.getList().then(resp => {
            let tempTask = resp.value.find(task => task.list_id == this.props.match.params.id);
            if (tempTask) {
                this.setState({
                    task: tempTask,
                    newTitle: tempTask.title,
                    newDescription: tempTask.description
                })
            } else {
                this.props.history.push('/')
            }
        });
    }

    render() {
        return (
            <div>
                Title:
                <input
                    value={this.state.newTitle}
                    onChange={e => this.changeTitle(e.target.value)}/>
                <br />
                Description:
                <textarea
                    value={this.state.newDescription}
                    onChange={e => this.changeDescription(e.target.value)}>
                </textarea>
                <br />
                <button
                    className='danger-btn btn'
                    onClick={_ => this.delete()}>
                    Delete
                    </button>
                <button
                    className='lame-btn btn'
                    onClick={_ => this.cancel()}>
                    Cancel
                    </button>
                <button
                    className='btn'
                    onClick={_ => this.edit()}>
                    Edit
                </button>
                <button
                    className='cool-btn btn'
                    disabled={this.state.task.completed}
                    onClick={_ => this.complete()}>
                    complete
                </button>
            </div>
        );
    }
}


export default connect(null, { getList, editTask, completeTask, deleteTask })(Details)