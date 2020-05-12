import {authCheck} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const SHOW_ERROR = 'app/SHOW_ERROR';

let initialState = {
    initialized: false,
    errorMessage: null
};

const appReducer = (state = initialState, action) => {
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

export const initializedSuccess = () =>
    ({
        type: INITIALIZED_SUCCESS
    });

export const showError = (error) =>
    ({
        type: SHOW_ERROR,
        error
    });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authCheck());

    Promise.all([promise])
        .then( () => {
            dispatch(initializedSuccess());
        });
};


export const showErrorForSomeSeconds = (message) => (dispatch) => {
    dispatch(showError(message));
    setTimeout(() => {dispatch(showError(null));},5000);
};

export default appReducer;