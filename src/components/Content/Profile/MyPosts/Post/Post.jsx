import React from 'react';
import s from './Post.module.css' //CSS import

const Post = (props) => {
    return (
        <li className={`${s.wrapper} clearfix`}>
            <img className={s.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQctmmnXqvt0mjVKe1Jk9aOMsDh6x1jEh0IZBuirezuuVpE07dQ" alt=""/>
            <div className={s.likes}>Likes: {props.likes}</div>
            <div className={s.post}>{props.post}</div>
        </li>
    );
};

export default Post;