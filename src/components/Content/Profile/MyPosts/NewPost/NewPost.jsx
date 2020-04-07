import React from 'react';
import s from './NewPost.module.css'


const NewPost = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onChangeNewPostText = () => {
        let text = newPostElement.current.value;
        props.changeNewPostText(text);
    };

    return (
        <div className={s.wrapper}>
                <textarea ref={newPostElement} rows='2' value={props.newPostText} onChange={onChangeNewPostText}/>
                <input className={s.submit} type="submit" value='Send' onClick={onAddPost}/>
        </div>
    );
};

export default NewPost;