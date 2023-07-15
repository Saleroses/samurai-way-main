import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionTypes, DialogsPageType} from "../../Redux/Store";
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../Redux/Dialogs-reducer";


type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void

}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.state.dialogsData.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state.messagesData.map((message) =>
        <Message message={message.message}/>)

    let newMassageBody = props.state.newMassageBody

    let onSendMassageClick = () => {
        props.dispatch(sendMassageCreator())
    }

    let onNewMassageChange = (e: ChangeEvent <HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMassageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    <div>
                        {dialogsElement}
                    </div>
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                        <div>
                            <div><textarea
                                value={newMassageBody}
                                placeholder={"Enter yor massage"}
                                onChange={onNewMassageChange}
                            ></textarea></div>
                            <div><button onClick={onSendMassageClick}>Send</button></div>
                        </div>
                </div>
            </div>
        </div>

    );
};

