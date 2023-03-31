import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../Redux/State";


type DialogsPropsType = {
    state: DialogsPageType
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.state.dialogsData.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state.messagesData.map((message) =>
        <Message message={message.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    <div>
                        {dialogsElement}
                    </div>
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>

    );
};

