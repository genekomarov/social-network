import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

///FOR PROFILE



//FOR DIALOGS



export default store;