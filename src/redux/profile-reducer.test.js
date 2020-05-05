import profileReducer, {addPostActionCreator} from "./profile-reducer";


it('new post should be added', () => {

    // 1. data
    let state = {
        posts: [
            {id: 0, post: 'Hello! How are you?', likes: 12},
            {id: 1, post: 'it\'s my first post.', likes: 0}
        ]
    };

    let action = addPostActionCreator('текст для теста добавления поста');

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});