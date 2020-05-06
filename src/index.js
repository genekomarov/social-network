import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkApp from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'

let rendererEntireTree = (state) => {

    ReactDOM.render(
        <SocialNetworkApp />,
        document.getElementById('root')
    );
};

rendererEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rendererEntireTree(state)
});

window.state = store.getState;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
