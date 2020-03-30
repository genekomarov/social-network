import React from 'react';
import s from './NewPost.module.css' //CSS import

const NewPost = () => {
    return (
        <div className={s.wrapper}>
            <form action="">
                <textarea name="post" rows='2'></textarea>
                <input className={s.submit} type="submit" value='Send'/>
            </form>
        </div>
    );
};

export default NewPost;