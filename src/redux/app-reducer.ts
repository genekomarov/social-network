import {authCheck} from "./auth-reducer"

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const SHOW_ERROR = 'app/SHOW_ERROR';

let initialState = {
    initialized: false,
    errorMessage: null
};

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        case SHOW_ERROR:
            return {
                ...state,
                errorMessage: action.error
            };
        default:
            return state;
    }
};

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType =>
    ({
        type: INITIALIZED_SUCCESS,
    });

type ShowErrorActionType = {
    type: typeof SHOW_ERROR,
    error: string | null
}
export const showError = (error: string | null): ShowErrorActionType =>
    ({
        type: SHOW_ERROR,
        error
    });

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authCheck());

    Promise.all([promise])
        .then( () => {
            dispatch(initializedSuccess());
        });
};

export const showErrorForSomeSeconds = (message: string) => (dispatch: any) => {
    dispatch(showError(message));
    setTimeout(() => {dispatch(showError(null));},5000);
};

export default appReducer;