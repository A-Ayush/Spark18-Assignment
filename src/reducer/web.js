import {
    GET_INITIAL_STATE,
    CHANGE_WEB_CHECKBOX
} from '../actions/actionTypes';

const initialState = {
    web : [{value:'HTML',checked:false,key:0,id:1},{value:'CSS',checked:false,key:1,id:1},{value:'JavaScript',checked:false,key:2,id:1},{value:'Nodejs',checked:false,key:3,id:1}]
}

export default function auth(state = initialState, action){
    switch(action.type){
        case GET_INITIAL_STATE:{
            return {
                ...state,
            }
        }
        case CHANGE_WEB_CHECKBOX: {
            state.web.map((obj) => {
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