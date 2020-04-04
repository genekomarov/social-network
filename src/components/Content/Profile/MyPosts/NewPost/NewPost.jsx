import React from 'react';
import s from './NewPost.module.css'
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../../../redux/state";



const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;

        let action = addPostActionCreator(text);
        props.dispatch(action);
    };

    let changeNewPostText = () => {
        let text = newPostElement.current.value;

        let action = changeNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.wrapper}>
                <textarea ref={newPostElement} rows='2' value={props.newPostText} onChange={changeNewPostText}/>
                <input className={s.submit} type="submit" value='Send' onClick={addPost}/>
        </div>
    );
};

export default NewPost;