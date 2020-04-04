const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 2,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText ='';
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
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