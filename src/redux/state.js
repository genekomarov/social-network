const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, post: 'Hello! How are you?', likes: 12},
                {id: 1, post: 'it\'s my first post.', likes: 0}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Ivan'},
                {id: '2', name: 'Vitaliy'},
                {id: '3', name: 'Andrey'},
                {id: '4', name: 'Anton'},
                {id: '5', name: 'Sergey'},
                {id: '6', name: 'Ilya'}
            ],
            messages: [
                {id: '1', message: 'Hello!'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'I\'m fine!'}
            ]
        },
        sidebar: ''
    },
    _callSubscriber () {
        console.log('State changed');
    },
    getState () {
        debugger;
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

/*
    addPost (postMessage) {
        let newPost = {
            id: 2,
            post: postMessage,
            likes: 0
        };

        debugger;
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
    changeNewPostText (newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },*/

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 2,
                post: action.postMessage,
                likes: 0
            };

            debugger;
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);

        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }
};


export const addPostActionCreator = (text) =>
    ({
        type: ADD_POST,
        postMessage: text
    });

export const changeNewPostTextActionCreator = (text) =>
    ({
        type: CHANGE_NEW_POST_TEXT,
        newPostText: text
    });


export default store;

window.store = store;