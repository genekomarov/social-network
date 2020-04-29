import React from 'react';
import s from './NewPost.module.css'
import {Field, reduxForm} from "redux-form";


const NewPost = (props) => {

    /*let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onChangeNewPostText = () => {
        let text = newPostElement.current.value;
        props.changeNewPostText(text);
    };*/

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
            <Field component={'textarea'} name={'message'} className={s.textarea} rows='2' />
            <button className={s.submit}>Submit</button>
        </form>
    )
};

const NewPostFormRedux = reduxForm({form:'profileNewPost'})(NewPostForm);

export default NewPost;