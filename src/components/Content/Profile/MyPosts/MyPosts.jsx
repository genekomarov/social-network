import React from 'react';
import s from './MyPosts.module.css'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 0, post:'Hello! How are you?',  likes:12},
        {id: 1, post:'it\'s my first post.', likes:0}
    ]

    return (
        <div className={s.wrapper}>
            <h2>My posts</h2>
            <NewPost/>
            <ul className={s.postList}>
                <Post post={postsData[0].post} likes={postsData[0].likes}/>
                <Post post={postsData[1].post} likes={postsData[1].likes}/>
            </ul>
        </div>
    );
};

export default MyPosts;