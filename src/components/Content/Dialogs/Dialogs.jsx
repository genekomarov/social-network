import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";



const Dialogs = (props) => {



    let dialogsElements =
        props.state.dialogs
            .map (d => <Dialog name={d.name} id={d.id} />);

    let messagesElements =
        props.state.messages
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
                    <NewMessage/>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;