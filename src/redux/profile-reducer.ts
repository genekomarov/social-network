import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'profile/SAVE_PROFILE_SUCCESS';
const SET_UPDATE_STATUS_ERROR = 'profile/SET_UPDATE_STATUS_ERROR'

type InitialStateType = {
    posts: Array<{
        id: number
        post: string
        likes: number
    }>
    profile: any //???
    status: string
    updateStatusError: string | null
    isTestError: boolean
    newPostText: string
}
let initialState: InitialStateType = {
    posts: [
        {id: 0, post: 'Hello! How are you?', likes: 12},
        {id: 1, post: 'it\'s my first post.', likes: 0}
    ],
    profile: null,
    status: "",
    updateStatusError: null,
    isTestError: true,
    newPostText: ''
};

const profileReducer = (state = initialState, action: any): InitialStateType => {

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
            return  {
                ...state,
                profile:  {
                    ...state.profile,
                    ...action.profile
                }
            };
        case SET_UPDATE_STATUS_ERROR:
            return {
                ...state,
                updateStatusError: action.error,
                isTestError: false
            };
        default: return state;
    }
};

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    post: string
}
export const addPostActionCreator = (post: string): AddPostActionCreatorType => ({
    type: ADD_POST,
    post
});

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    userProfile: any
}
export const setUserProfile = (userProfile: any): SetUserProfileType => ({
    type: SET_USER_PROFILE,
    userProfile
});

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS,
    status
});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: any
}
export const savePhotoSuccess = (photos: any): SavePhotoSuccessActionType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});

type SaveProfileSuccessActionType = {
    type: typeof SAVE_PROFILE_SUCCESS
    profile: any
}
export const saveProfileSuccess = (profile: any): SaveProfileSuccessActionType => ({
    type: SAVE_PROFILE_SUCCESS,
    profile
});

type SetUpdateStatusErrorActionType = {
    type: typeof SET_UPDATE_STATUS_ERROR
    error: string | null
}
export const setUpdateStatusError = (error: string | null): SetUpdateStatusErrorActionType => ({
    type: SET_UPDATE_STATUS_ERROR,
    error
});


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
};

export const updateStatus = (status: string, isTestError: boolean) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.resultCode === 0)
            dispatch(setStatus(status));

        if (isTestError) throw 'TEST update status error';

    } catch (e) {
        dispatch(setUpdateStatusError(e));
        setTimeout(() => dispatch(setUpdateStatusError(null)), 3000)
    }

};

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.photos))
};

export const saveProfile = (profile: any, setEditMode: any) => async (dispatch: any) => {
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(saveProfileSuccess(profile));
        setEditMode(false);
    } else
        dispatch(stopSubmit('profileInfo', {_error: data.messages.length > 0 ? data.messages[0] : 'Some error'}));

};

export default profileReducer;