import axios from 'axios'

// Actions
const GET_TASK = 'GET_TASK';
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const COMPLETE_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';


// initial state
const initialState = {
    list: []
}

// Reducer
export default (state = initialState, action) => {
    return action.type.includes('TASK_FULFILLED') ? {list: action.payload} : state;
};

// Action Creators
//get task
export function getList() {
    return {
        type: GET_TASK,
        payload: axios.get('/api/tasks').then(resp => resp.data)
    }
};

// add task
export function addTask(title) {
    let body = {title};
    return {
        type: ADD_TASK,
        payload: axios.post('/api/tasks', body).then(resp => resp.data)
    }
};

// edit task
export function editTask(id, task) {
    return {
        type: EDIT_TASK,
        payload: axios.patch(`/api/tasks/${id}`, task).then(resp => resp.data)
    }
};

//delete task
export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: axios.delete(`/api/tasks/${id}`).then(resp => resp.data)
    }
};

// complet task
export function completeTask(id) {
    return {
        type: COMPLETE_TASK,
        payload: axios.put(`/api/tasks/${id}`).then(resp => resp.data)
    }
};



