import React from 'react';
import s from './NewMessage.module.css' //CSS import

let newMessageElement = React.createRef();

let addMessage = () => {
    let text = newMessageElement.current.value;
    alert (text);
}

const NewMessage = () => {
    return (
        <div className={s.wrapper}>
            <form action="">
                <textarea ref={newMessageElement} name="post" rows='2'/>
                <input className={s.submit} type="submit" value='Send' onClick={addMessage}/>
            </form>
        </div>
    );
};

export default NewMessage;