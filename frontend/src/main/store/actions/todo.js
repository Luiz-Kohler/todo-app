import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

import { DESCRIPTION_CHANGED, DESCRIPTION_CLEANED } from './todoTypes'

export const changeDescription = e => ({
    type: DESCRIPTION_CHANGED,
    payload: e.target.value
})

export const cleanDescription = () => ({
    type: DESCRIPTION_CLEANED,
    payload: ''
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}

export const add = description => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADDDED', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true })
            .then(resp => dispatch({ type: 'MARK_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false })
            .then(resp => dispatch({ type: 'MARK_AS_PENDING', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch({ type: 'TODO_DELETED', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}