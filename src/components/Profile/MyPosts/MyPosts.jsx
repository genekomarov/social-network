import React from 'react';
import s from './MyPosts.module.css'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.wrapper}>
            <h2>My posts</h2>
            <NewPost/>
            <ul className={s.postList}>
                <Post post='Hello! How are you?' />
                <Post post="it's my first post."/>
            </ul>
        </div>
    );
};

export default MyPosts;