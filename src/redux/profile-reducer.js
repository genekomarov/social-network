import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 0, post: 'Hello! How are you?', likes: 12},
        {id: 1, post: 'it\'s my first post.', likes: 0}
    ],
    /*newPostText: '',*/
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let text = action.post;
            return {
                ...state,
                posts: [...state.posts, {id: 2, post: text, likes: 0}],
                newPostText: ''
            };
        /*case CHANGE_NEW_POST_TEXT:
            debugger
            return {
                ...state,
                newPostText: action.newPostText
            };*/
        case SET_USER_PROFILE:
            return { ...state, profile: action.userProfile};
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default: return state;
    }
};

export const addPostActionCreator = (post) =>
    ({
        type: ADD_POST,
        post
    });

/*export const changeNewPostTextActionCreator = (text) =>
    ({
        type: CHANGE_NEW_POST_TEXT,
        newPostText: text
    });*/

export const setUserProfile = (userProfile) =>
    ({
        type: SET_USER_PROFILE,
        userProfile
    });

export const setStatus = (status) =>
    ({
        type: SET_STATUS,
        status
    });


export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            });
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(responce => {
                dispatch(setStatus(responce));
            })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(responce => {
                if (responce.resultCode === 0)
                    dispatch(setStatus(status));
            })
    }
};


export default profileReducer;