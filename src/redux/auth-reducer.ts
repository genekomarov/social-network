import {authAPI, ResultCodesEnum, securityAPI, ResultCodeWithCaptcha} from "../api/api";
import {stopSubmit} from 'redux-form';
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "./redux-store"

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    id: 7252 as number | null,  //идентификатор пользователя
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false, //Статус авторизации
    captcha: null as string | null
};

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = SetAuthUserDataActionType | SetCaptchaUrlActionType

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

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const authCheck = (): ThunkType => async (dispatch) => {
    let data = await authAPI.authCheck();

    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};



export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
): ThunkType => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(authCheck());
        setCaptchaUrl(null);
    } else if (data.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) {
        dispatch(getCaptcha());
    } else {
        /** ПРОБЛЕМА при назначении типа ThunkType
         * Временно решено "dispatch: any" */
        dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'Some error'}));
    }
};

export type LoginType = typeof login

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(authCheck());
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptcha = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptcha();
    dispatch(setCaptchaUrl(data.url));
};

export type GetCaptchaType = typeof getCaptcha



export default authReducer;