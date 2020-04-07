import React from 'react';
import s from './NewMessage.module.css'

const NewMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let changeNewMessageText = (e) => {
        let text = e.target.value; //e.current.target.value

        props.changeNewMessageText (text);
    }

    return (
        <div className={s.wrapper}>

            <textarea ref={newMessageElement} name="post" rows='2' value={props.newMessageText}
                      onChange={changeNewMessageText}/>
            <input className={s.submit} type="submit" value='Send' onClick={addMessage}/>

        </div>
    );
};

export default NewMessage;