import {
    GET_INITIAL_STATE
} from '../actions/actionTypes';

const initialState = {
    web : [{value:'HTML',checked:false,key:0},{value:'CSS',checked:false,key:1},{value:'JavaScript',checked:false,key:2},{value:'Nodejs',checked:false,key:3}]
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