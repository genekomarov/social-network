import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

let initialState = {
    posts: [
        {id: 0, post: 'Hello! How are you?', likes: 12},
        {id: 1, post: 'it\'s my first post.', likes: 0}
    ],
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
        case SET_USER_PROFILE:
            return { ...state, profile: action.userProfile};
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            };
        case SAVE_PROFILE_SUCCESS:

            let newState =  {
                ...state,
                profile:  {
                    ...state.profile,
                    ...action.profile
                }
            };
            return newState;

        default: return state;
    }
};

export const addPostActionCreator = (post) =>
    ({
        type: ADD_POST,
        post
    });

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

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});

export const saveProfileSuccess = (profile) => ({
    type: SAVE_PROFILE_SUCCESS,
    profile
});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0)
        dispatch(setStatus(status));
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.photos))
};

export const saveProfile = (profile, setEditMode) => async (dispatch) => {
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(saveProfileSuccess(profile));
        setEditMode(false);
    } else
        dispatch(stopSubmit('profileInfo', {_error: data.messages.length > 0 ? data.messages[0] : 'Some error'}));

};

export default profileReducer;