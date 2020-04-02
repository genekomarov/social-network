import React from 'react';
import s from './NewPost.module.css' //CSS import

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let changeNewPostText = () => {
        let text = newPostElement.current.value;
        props.changeNewPostText(text);
    };

    return (
        <div className={s.wrapper}>
                <textarea ref={newPostElement} rows='2' value={props.newPostText} onChange={changeNewPostText}/>
                <input className={s.submit} type="submit" value='Send' onClick={addPost}/>
        </div>
    );
};

export default NewPost;