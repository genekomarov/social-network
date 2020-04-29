import React from 'react';
import s from './NewMessage.module.css'
import {Field, reduxForm} from "redux-form";

const NewMessage = (props) => {

    /*let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let changeNewMessageText = (e) => {
        let text = e.target.value; //e.current.target.value

        props.changeNewMessageText (text);
    };*/

    let addMessage = (formData) => {
        props.addMessage(formData.message);
    };

    return (
        <DialogsNewMessageFormRedux onSubmit={addMessage}/>
    );
};

const DialogsNewMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.wrapper}>
            <Field component={'textarea'} name={'message'} rows='2'/>
            <button className={s.submit}>Submit</button>
        </form>
    )
};

const DialogsNewMessageFormRedux = reduxForm({form: 'dialogsNewMessage'})(DialogsNewMessageForm);

export default NewMessage;