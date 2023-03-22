import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {dialogsDataType, messagesDataType} from "../../index";
import {Message} from "./Message/Message";


type DialogsType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}


export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElement = props.dialogsData.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.messagesData.map((message) =>
        <Message message={message.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    {dialogsElement}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );
};

