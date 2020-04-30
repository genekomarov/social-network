import React from 'react';
import s from './NewPost.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";

const maxLength10 = maxLength(10);

const NewPost = (props) => {

    const onAddPost = (formData) => {
        props.addPost(formData.message);
    };

    return (
        <NewPostFormRedux onSubmit={onAddPost}/>
    );
};

const NewPostForm = (props) => {
    return (
        <form className={s.wrapper} onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength10]}
                component={Textarea} name={'message'} className={s.textarea} placeholder={'Post message'} rows='2' />
            <button className={s.submit}>Submit</button>
        </form>
    )
};

const NewPostFormRedux = reduxForm({form:'profileNewPost'})(NewPostForm);

export default NewPost;