import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rendererEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
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
