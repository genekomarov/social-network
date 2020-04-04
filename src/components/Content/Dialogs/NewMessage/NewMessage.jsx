import React from 'react';
import s from './NewMessage.module.css'
import {addMessageTextCreator, changeNewMessageTextCreator} from "../../../../redux/state";

const NewMessage = (props) => {

    let store = props.store;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let action = addMessageTextCreator();
        store.dispatch(action);
    }

    let changeNewMessageText = (e) => {
        let text = e.target.value; //e.current.target.value

        let action = changeNewMessageTextCreator(text);
        store.dispatch(action);
    }

    return (
        <div className={s.wrapper}>

            <textarea ref={newMessageElement} name="post" rows='2' value={store.getState().dialogsPage.newMessageText}
                      onChange={changeNewMessageText}/>
            <input className={s.submit} type="submit" value='Send' onClick={addMessage}/>

        </div>
    );
};

export default NewMessage;