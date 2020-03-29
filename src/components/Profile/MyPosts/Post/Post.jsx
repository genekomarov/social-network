import React from 'react';
import s from './Post.module.css' //CSS import

const Post = () => {
    return (
        <li className={`${s.wrapper} clearfix`}>
            <img className={s.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQctmmnXqvt0mjVKe1Jk9aOMsDh6x1jEh0IZBuirezuuVpE07dQ" alt=""/>
            <div className={s.post}>Post 1</div>
        </li>
    );
};

export default Post;