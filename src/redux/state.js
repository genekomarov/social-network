const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

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
            ],
            newMessageText: ''
        },
        sidebar: ''
    },
    _callSubscriber () {
        console.log('State changed');
    },
    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
/*        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 2,
                post: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);

        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }*/

        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 2,
                    post: this._state.profilePage.newPostText,
                    likes: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText='';
                this._callSubscriber(this._state);
                break;
            case 'CHANGE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber(this._state);
                break;
            case 'ADD-MESSAGE':
                let newMessage = {
                    id: 2,
                    message: this._state.dialogsPage.newMessageText
                };
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText ='';
                this._callSubscriber(this._state);
                break;
            case 'CHANGE-NEW-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._callSubscriber(this._state);
                break;
        }
    }
};

///FOR PROFILE
export const addPostActionCreator = () =>
    ({
        type: ADD_POST
    });

export const changeNewPostTextActionCreator = (text) =>
    ({
        type: CHANGE_NEW_POST_TEXT,
        newPostText: text
    });


//FOR DIALOGS
export const addMessageTextCreator = () =>
    ({
        type: ADD_MESSAGE
    });

export const changeNewMessageTextCreator = (text) =>
    ({
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessageText: text
    });


export default store;
window.store = store;