import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../../../redux/profile-reducer";
import NewPost from "./NewPost";



const NewPostContainer = (props) => {

    let onAddPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let onChangeNewPostText = (text) => {
        let action = changeNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };



    return (
        <div>
            <NewPost
                addPost={onAddPost}
                changeNewPostText={onChangeNewPostText}
                newPostText={props.store.getState().profilePage.newPostText}
            />
        </div>
    );
};

export default NewPostContainer;