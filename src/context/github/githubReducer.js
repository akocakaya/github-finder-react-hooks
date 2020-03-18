import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USERS,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../type';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading : false
            };
        case SET_LOADING:
            return {
                ...state,
                loading:true
            };
        default:
            return state;
    }
}