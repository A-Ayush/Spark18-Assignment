import {
    GET_INITIAL_STATE
} from '../actions/actionTypes';

const initialState = {
    ds : [{value:'Array',checked:false, key:0},{value:'LinkList',checked:false,key:1},{value:'HashMap',checked:false,key:2},{value:'Stack',checked:false,key:3}]
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