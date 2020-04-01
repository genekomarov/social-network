import React from 'react';
import s from './MyPosts.module.css'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.state
            .map (p => <Post post={p.post} likes={p.likes}/>)



    return (
        <div className={s.wrapper}>
            <h2>My posts</h2>
            <NewPost addPost={props.addPost}/>
            <ul className={s.postList}>
                {postsElements}
            </ul>
        </div>
    );
};

export default MyPosts;