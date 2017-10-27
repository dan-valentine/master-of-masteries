import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { completeTask } from '../ducks/reducer';

function Task({ completeTask, task }) {
    return (
        <div>
            {task.title}
            <button 
                className='cool-btn btn'
                onClick={_ => completeTask(task.list_id)}
                disabled={task.completed}>
                complete
            </button>
            <Link to={`/list/details/${task.list_id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
}

export default connect(null, { completeTask })(Task);