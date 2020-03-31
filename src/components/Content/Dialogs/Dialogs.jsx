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

    let dialogsData = [
        {id: '1', name: 'Ivan'},
        {id: '2', name: 'Vitaliy'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Anton'},
        {id: '5', name: 'Sergey'},
        {id: '6', name: 'Ilya'},
    ];

    let messagesData = [
        {id: '1', message: 'Hello!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'I\'m fine!'}
    ];

    return (
        <div>
            Dialogs
            <div className={s.dialogsWrapper}>
                <div className={s.dialogs}>
                    <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                    <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                    <Message message={messagesData[2].message} />
                </div>
            </div>

        </div>
    );
};

export default Dialogs;