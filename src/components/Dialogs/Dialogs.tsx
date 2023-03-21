import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {message} from "antd";


type DialogItemType = {
    name: string,
    id: number,
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


type MessageType = {
    message: string,
    id?: number
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"},
]

let messagesData = [
    {id: 1, message: "Yooo"},
    {id: 2, message: "Hi bro!"},
    {id: 3, message: "Hey"},
    {id: 4, message: "Wazzzzzzzuuup"},
    {id: 5, message: "Salam"},
    {id: 6, message: "Dobreishego"},
]

let dialogsElement = dialogsData.map((dialog) =>
    <DialogItem name={dialog.name} id={dialog.id}/>)

let messagesElements = messagesData.map((message) =>
    <Message message={message.message}/>)

type propsDialogsType = {
    name: string
    id: number
    likesCount: number
}

const Dialogs = (props: propsDialogsType) => {
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

export default Dialogs;