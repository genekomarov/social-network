const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 2,
                post: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText='';
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
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