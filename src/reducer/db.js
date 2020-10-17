import {
    GET_INITIAL_STATE
} from '../actions/actionTypes';

const initialState = {
    // ds : [{value:'Array',checked:false},{value:'LinkList',checked:false},{value:'HashMap',checked:false},{value:'Stack',checked:false}],
    // web : [{value:'HTML',checked:false},{value:'CSS',checked:false},{value:'JavaScript',checked:false},{value:'Nodejs',checked:false}],
    db: [{value:'SQL',checked:false},{value:'MongoDB',checked:false}]
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