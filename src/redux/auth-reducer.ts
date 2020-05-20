import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    id: 7252,  //идентификатор пользователя
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false, //Статус авторизации
    captcha: null as string | null
};

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: AuthDataType
}
export const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
): SetAuthUserDataActionType =>
    ({
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    });

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    url: string | null
}
export const setCaptchaUrl = (url: string | null): SetCaptchaUrlActionType =>
    ({
        type: SET_CAPTCHA_URL,
        url
    });

export const authCheck = () => async (dispatch: any) => {
    let data = await authAPI.authCheck();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(authCheck());
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptcha = () => async (dispatch: any) => {
    let data = await securityAPI.getCaptcha();
    dispatch(setCaptchaUrl(data.url));
};



export default authReducer;