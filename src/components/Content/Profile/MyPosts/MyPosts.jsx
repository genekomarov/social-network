import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

const MyPosts = React.memo((props) => {

    let postsElements =
        props.posts
            .map(p => <Post key={p.id} post={p.post} likes={p.likes}/>);

    return (
        <div className={s.wrapper}>
            <h2>My posts</h2>
            <NewPostContainer/>
            <ul className={s.postList}>
                {postsElements}
            </ul>
        </div>
    );
});

export default MyPosts;