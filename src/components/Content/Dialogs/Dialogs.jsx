import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements =
        props.dialogs
            .map(d => <Dialog key={d.id} name={d.name} id={d.id}/>);

    let messagesElements =
        props.messages
            .map(m => <Message key={m.id} message={m.message}/>);


    if (!props.isAuth) return <Redirect to='/login'/>;
    return (
        <div>
            Dialogs
            <div className={s.dialogsWrapper}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <NewMessageContainer/>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;