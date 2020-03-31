import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message"; //CSS import



const Dialogs = (props) => {



    let dialogsElements =
        props.dialogs
            .map (d => <Dialog name={d.name} id={d.id} />);

    let messagesElements =
        props.messages
            .map (m => <Message message={m.message} />)

    return (
        <div>
            Dialogs
            <div className={s.dialogsWrapper}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>

        </div>
    );
};

export default Dialogs;