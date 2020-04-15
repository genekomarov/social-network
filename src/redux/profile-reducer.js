const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 0, post: 'Hello! How are you?', likes: 12},
        {id: 1, post: 'it\'s my first post.', likes: 0}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 2, post: text, likes: 0}],
                newPostText: ''
            };
        case CHANGE_NEW_POST_TEXT:
            debugger
            return {
                ...state,
                newPostText: action.newPostText
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.userProfile};
        default: return state;
    }
};

export const addPostActionCreator = () =>
    ({
        type: ADD_POST
    });

export const changeNewPostTextActionCreator = (text) =>
    ({
        type: CHANGE_NEW_POST_TEXT,
        newPostText: text
    });

export const setUserProfile = (userProfile) =>
    ({
        type: SET_USER_PROFILE,
        userProfile
    });

export default profileReducer;