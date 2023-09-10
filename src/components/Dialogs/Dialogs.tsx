import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType, SendMassageAC, UpdateNewMassageBodyAC} from "../../Redux/Dialogs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-store";


type DialogsPropsType = {
    state: DialogsPageType
}


export const Dialogs = (props: DialogsPropsType) => {

    const dialogsState = useSelector <AppRootStateType, DialogsPageType>(state => state.dialogsPage)
    let dispatch = useDispatch()

    let dialogsElement = dialogsState.dialogsData.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)

    let messagesElements = dialogsState.messagesData.map((message) =>
        <Message message={message.message} key={message.id}/>)

    let newMassageBody = dialogsState.newMassageBody

    let onSendMassageClick = () => {
        dispatch(SendMassageAC())
    }

    let onNewMassageChange = (e: ChangeEvent <HTMLTextAreaElement>) => {
        let body = e.target.value
        dispatch(UpdateNewMassageBodyAC(body))

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

