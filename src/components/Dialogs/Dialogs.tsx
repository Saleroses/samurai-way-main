import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name: string,
    id: string,
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
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



type propsDialogsType = {

}

const Dialogs = (props: propsDialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    <DialogItem name="Dimych" id= "1"/>
                    <DialogItem name="Andrey" id= "2"/>
                    <DialogItem name="Sveta" id= "3"/>
                    <DialogItem name="Sasha" id= "4"/>
                    <DialogItem name="Viktor" id= "5"/>
                    <DialogItem name="Valera" id= "6"/>
                </div>
            </div>
            <div className={s.messages}>
                <Message message={"Yooo"}/>
                <Message message={"Hi bro!"}/>
                <Message message={"Hey"}/>
                <Message message={"Wazzzzzzzuuup"}/>
                <Message message={"Salam"}/>
                <Message message={"Dobreishego"}/>
            </div>
        </div>

    );
};

export default Dialogs;