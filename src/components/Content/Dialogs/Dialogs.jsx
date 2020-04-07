import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";
import NewMessageContainer from "./NewMessage/NewMessageContainer";



const Dialogs = (props) => {

    let store = props.store;

    let dialogsElements =
        store.getState().dialogsPage.dialogs
            .map (d => <Dialog name={d.name} id={d.id} />);

    let messagesElements =
        store.getState().dialogsPage.messages
            .map (m => <Message message={m.message} />);

    return (
        <div>
            Dialogs
            <div className={s.dialogsWrapper}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <NewMessageContainer store={props.store}/>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;