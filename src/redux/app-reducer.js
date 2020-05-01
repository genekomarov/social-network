import {authCheck} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const ACTION_TYPE_2 = 'ACTION-TYPE-2';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        case ACTION_TYPE_2:
            return {};
        default:
            return state;
    }
};

export const initializedSuccess = () =>
    ({
        type: INITIALIZED_SUCCESS
    });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authCheck());

    Promise.all([promise])
        .then( () => {
            dispatch(initializedSuccess());
        });
};

export default appReducer;