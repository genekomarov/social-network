import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import StoreContext from "../../../../../StoreContext";



const NewPostContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let onAddPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                };

                let onChangeNewPostText = (text) => {
                    let action = changeNewPostTextActionCreator(text);
                    store.dispatch(action);
                };
                return (

                    <NewPost
                        addPost={onAddPost}
                        changeNewPostText={onChangeNewPostText}
                        newPostText={store.getState().profilePage.newPostText}
                    />)
            }}
        </StoreContext.Consumer>
    );
};

export default NewPostContainer;