import {authAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';

let initialState = {
    id: 7252,  //идентификатор пользователя
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
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) =>
    ({
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    });

export const authCheck = () => async (dispatch) => {
    let data = await authAPI.authCheck();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(authCheck());
    } else {
        dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'Some error'}));
    }
};

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(authCheck());
        dispatch(setAuthUserData(null, null, null, false));
    }
};



export default authReducer;