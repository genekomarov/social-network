let state = {
    profilePage: {
        posts: [
            {id: 0, post: 'Hello! How are you?', likes: 12},
            {id: 1, post: 'it\'s my first post.', likes: 0}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Ivan'},
            {id: '2', name: 'Vitaliy'},
            {id: '3', name: 'Andrey'},
            {id: '4', name: 'Anton'},
            {id: '5', name: 'Sergey'},
            {id: '6', name: 'Ilya'}
        ],
        messages: [
            {id: '1', message: 'Hello!'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'I\'m fine!'}
        ]
    },
    sidebar: ''
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 2,
        post: postMessage,
        likes: 0
    };

    state.profilePage.posts.push(newPost);
};

export default state;