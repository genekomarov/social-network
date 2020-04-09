const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 2, message: text}],
                newMessageText: ''
            };
        case CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        default: return state;
    }
};

export const addMessageTextCreator = () =>
    ({
        type: ADD_MESSAGE
    });

export const changeNewMessageTextCreator = (text) =>
    ({
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessageText: text
    });

export default dialogsReducer;