const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

type InitialStateType = {
    dialogs: Array<{
        id: number
        name: string
    }>
    messages: Array<{
        id: number
        message: string
    }>
    newMessageText: string
}

let initialState: InitialStateType = {
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Vitaliy'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Ilya'}
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I\'m fine!'}
    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = AddMessageTextCreatorType

type AddMessageTextCreatorType = {
    type: typeof ADD_MESSAGE
    message: string
}
export const addMessageTextCreator = (message: string): AddMessageTextCreatorType =>
    ({
        type: ADD_MESSAGE,
        message
    });

export default dialogsReducer;