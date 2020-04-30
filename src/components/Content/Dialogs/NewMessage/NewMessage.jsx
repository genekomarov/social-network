import React from 'react';
import s from './NewMessage.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength30 = maxLength(30);

const NewMessage = (props) => {


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
            <Field
                validate={[required, maxLength30]}
                component={Textarea} name={'message'} />
            <button className={s.submit}>Submit</button>
        </form>
    )
};

const DialogsNewMessageFormRedux = reduxForm({form: 'dialogsNewMessage'})(DialogsNewMessageForm);

export default NewMessage;