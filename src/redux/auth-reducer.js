const SET_USER_DATA = 'SET-USER-DATA';
const ACTION_TYPE_2 = 'ACTION-TYPE-2';

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
        case ACTION_TYPE_2:
            return {};
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) =>
    ({
        type: SET_USER_DATA,
        data: {id, email, login}
    });

export default authReducer;