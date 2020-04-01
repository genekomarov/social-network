import React from 'react';
import s from './NewPost.module.css' //CSS import

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        debugger;
        props.addPost(text);
    };

    return (
        <div className={s.wrapper}>
                <textarea ref={newPostElement} name="post" rows='2'/>
                <input className={s.submit} type="submit" value='Send' onClick={addPost}/>
        </div>
    );
};

export default NewPost;