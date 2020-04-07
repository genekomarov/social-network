import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch (addPostActionCreator()),
        changeNewPostText: (text) => dispatch (changeNewPostTextActionCreator(text))
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;