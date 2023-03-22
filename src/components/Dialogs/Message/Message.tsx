import React from 'react';
import s from "./../Dialogs.module.css"
import {messagesDataType} from "../../../index";


type MessageType = {
    message: string
}


export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


