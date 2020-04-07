import React from 'react';
import {addMessageTextCreator, changeNewMessageTextCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import StoreContext from "../../../../StoreContext";

const NewMessageContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let onAddMessage = () => {
                    let action = addMessageTextCreator();
                    store.dispatch(action);
                };

                let onChangeNewMessageText = (text) => {
                    let action = changeNewMessageTextCreator(text);
                    store.dispatch(action);
                };

                return (
                    <NewMessage
                        addMessage={onAddMessage}
                        changeNewMessageText={onChangeNewMessageText}
                        newMessageText={store.getState().dialogsPage.newMessageText}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    );
};

export default NewMessageContainer;