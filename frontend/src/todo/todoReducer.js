import { DESCRIPTION_CHANGED, DESCRIPTION_CLEANED } from '../main/store/actions/todoTypes'

const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    console.log('Entrando em todo reducers')
    switch (action.type) {
        case DESCRIPTION_CHANGED:
            return {...state, description: action.payload };
        case DESCRIPTION_CLEANED:
            return {...state, description: action.payload };
        case 'TODO_SEARCHED':
            console.log('TODO_SEARCHED')
            return {...state, list: action.payload }
        case 'TODO_ADDDED':
            console.log('TODO_ADDDED')
            return {...state, description: '' }
        case 'TODO_MARKED_AS_DONE':
            console.log('TODO_MARKED_AS_DONE')
            return {...state, payload: action.payload.data }
        case 'MARK_AS_PENDING':
            console.log('MARK_AS_PENDING')
            return {...state, payload: action.payload.data }
        case 'TODO_DELETED':
            console.log('TODO_DELETED')
            return {...state, payload: action.payload.data }
        default:
            console.log('TODO_DEFAULT')
            return state;
    }
}