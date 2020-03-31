import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//----DataLayer--------------------
//---------------------------------
let dialogs = [
    {id: '1', name: 'Ivan'},
    {id: '2', name: 'Vitaliy'},
    {id: '3', name: 'Andrey'},
    {id: '4', name: 'Anton'},
    {id: '5', name: 'Sergey'},
    {id: '6', name: 'Ilya'},
];

let messages = [
    {id: '1', message: 'Hello!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'I\'m fine!'}
];

let posts = [
    {id: 0, post:'Hello! How are you?',  likes:12},
    {id: 1, post:'it\'s my first post.', likes:0}
];
//----End-of-DataLayer-------------
//---------------------------------



ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
