import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import StoreContext from "../../../StoreContext";



const Dialogs = () => {
    debugger
    return (
        <StoreContext.Consumer>
            {(store) => {
                    debugger
                    let dialogsElements =
                        store.getState().dialogsPage.dialogs
                            .map(d => <Dialog name={d.name} id={d.id}/>);

                    let messagesElements =
                        store.getState().dialogsPage.messages
                            .map(m => <Message message={m.message}/>);

                    return (
                        <div>
                            Dialogs
                            <div className={s.dialogsWrapper}>
                                <div className={s.dialogs}>
                                    {dialogsElements}
                                </div>
                                <div className={s.messages}>
                                    {messagesElements}
                                    <NewMessageContainer/>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default Dialogs;