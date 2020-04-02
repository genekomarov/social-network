import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

import state from './redux/state'
import {addPost} from "./redux/state";
import {rendererEntireTree} from "./render";

addPost('some'); //TEST

rendererEntireTree(state);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
