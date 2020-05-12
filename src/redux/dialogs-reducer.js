const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.message;
            return {
                ...state,
                messages: [...state.messages, {id: 2, message: text}],
                newMessageText: ''
            };
        default: return state;
    }
};

export const addMessageTextCreator = (message) =>
    ({
        type: ADD_MESSAGE,
        message
    });

export default dialogsReducer;