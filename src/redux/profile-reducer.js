const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 0, post: 'Hello! How are you?', likes: 12},
        {id: 1, post: 'it\'s my first post.', likes: 0}
    ],
    newPostText: ''
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
            return {
                ...state,
                newPostText: action.newPostText
            };
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

export default profileReducer;