import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom"; //CSS import

const Dialog = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeDialog}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: '1', name: 'Ivan'},
        {id: '2', name: 'Vitaliy'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Anton'},
        {id: '5', name: 'Sergey'},
        {id: '6', name: 'Ilya'},
    ];

    let messages = [
        {id: '1', message: 'Hello!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'I\'m fine!'}
    ];

    let dialogsElements =
        dialogs
            .map (d => <Dialog name={d.name} id={d.id} />);

    let messagesElements =
        messages
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