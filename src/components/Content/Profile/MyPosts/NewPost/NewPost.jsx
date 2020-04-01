import React from 'react';
import s from './NewPost.module.css' //CSS import

let newPostElement = React.createRef();

let addPost = () => {
    let text = newPostElement.current.value;
    alert (text);
}

const NewPost = () => {
    return (
        <div className={s.wrapper}>
            <form action="">
                <textarea ref={newPostElement} name="post" rows='2'/>
                <input className={s.submit} type="submit" value='Send' onClick={addPost}/>
            </form>
        </div>
    );
};

export default NewPost;