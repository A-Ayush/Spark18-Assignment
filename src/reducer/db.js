import {
    GET_INITIAL_STATE,
    CHANGE_DB_CHECKBOX
} from '../actions/actionTypes';

const initialState = {
    db: [{value:'SQL',checked:false,key:0,id:2},{value:'MongoDB',checked:false,key:1,id:2}]
}

export default function auth(state = initialState, action){
    switch(action.type){
        case GET_INITIAL_STATE:{
            return {
                ...state,
            }
        }
        case CHANGE_DB_CHECKBOX: {
            state.db.map((obj) => {
                if(obj.value == action.value){
                    obj.checked = !obj.checked;
                }
            })
            return { ...state };
        }
        default:
            return state;
    }
}