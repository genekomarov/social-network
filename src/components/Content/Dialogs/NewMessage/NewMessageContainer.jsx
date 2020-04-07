import React from 'react';
import {addMessageTextCreator, changeNewMessageTextCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {

    let store = props.store;

    let onAddMessage = () => {
        let action = addMessageTextCreator();
        store.dispatch(action);
    };

    let onChangeNewMessageText = (text) => {
        let action = changeNewMessageTextCreator(text);
        store.dispatch(action);
    };

    debugger
    return (
        <div>
            <NewMessage
                addMessage={onAddMessage}
                changeNewMessageText={onChangeNewMessageText}
                newMessageText={store.getState().dialogsPage.newMessageText}
            />
        </div>
    );
};

export default NewMessageContainer;