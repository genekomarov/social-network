import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    id: 7252,  //идентификатор пользователя
    email: null,
    login: null,
    isFetching: false,
    isAuth: false, //Статус авторизации
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.url
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

export const setCaptchaUrl = (url) =>
    ({
        type: SET_CAPTCHA_URL,
        url
    });

export const authCheck = () => async (dispatch) => {
    let data = await authAPI.authCheck();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
        dispatch(authCheck());
        setCaptchaUrl(null);
    } else if (data.resultCode === 10) {
        dispatch(getCaptcha());
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

export const getCaptcha = () => async (dispatch) => {
    let data = await securityAPI.getCaptcha();
    dispatch(setCaptchaUrl(data.url));
};



export default authReducer;