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
    return (
        <div>
            Dialogs
            <div className={s.dialogsWrapper}>
                <div className={s.dialogs}>
                    <Dialog name='Ivan'     id='1' />
                    <Dialog name='Vitaliy'  id='2' />
                    <Dialog name='Andrey'   id='3' />
                    <Dialog name='Anton'    id='4' />
                    <Dialog name='Sergey'   id='5' />
                    <Dialog name='Ilya'     id='6' />
                </div>
                <div className={s.messages}>
                    <Message message="Hello!" />
                    <Message message="How are you?"/>
                    <Message message="I'm fine!"/>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;