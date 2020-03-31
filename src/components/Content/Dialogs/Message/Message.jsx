import React from 'react';
import s from './../Dialogs.module.css' //CSS import

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

export default Message;