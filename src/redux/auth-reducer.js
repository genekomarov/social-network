import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: 2,  //идентификатор пользователя
    email: null,
    login: null,
    isFetching: false,
    isAuth: false //Статус авторизации
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) =>
    ({
        type: SET_USER_DATA,
        data: {id, email, login}
    });

export const authCheck = () => {
    return (dispatch) => {
        authAPI.authCheck()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};

export default authReducer;