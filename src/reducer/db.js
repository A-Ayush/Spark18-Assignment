import {
    GET_INITIAL_STATE
} from '../actions/actionTypes';

const initialState = {
    db: [{value:'SQL',checked:false,key:0},{value:'MongoDB',checked:false,key:1}]
}

export default function auth(state = initialState, action){
    switch(action.type){
        case GET_INITIAL_STATE:{
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}