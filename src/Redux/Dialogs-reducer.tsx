import {
    ActionTypes, DialogsDataType,
    DialogsPageType, MessagesDataType,
    SendMassageBodyActionType,
    UpdateNewMassageBodyActionType
} from "./Store";
import {v1} from "uuid";
import {MessageType} from "antd/es/message";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE_BODY = "SEND-MESSAGE-BODY"

let initialState: DialogsPageType = {
    dialogsData: [
        {id: v1(), name: "Dimych"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Viktor"},
        {id: v1(), name: "Valera"},
    ] as Array<DialogsDataType>,
    messagesData: [
        {id: v1(), message: "Yooo"},
        {id: v1(), message: "Hi bro!"},
        {id: v1(), message: "Hey"},
        {id: v1(), message: "Wazzzzzzzzzz zzzzzzzzuuup"},
        {id: v1(), message: "Salam"},
        {id: v1(), message: "Dobreishego"},
    ] as Array<MessagesDataType>,
    newMassageBody: ""
}

export type InitialStateType = typeof initialState


const DialogsReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMassageBody = action.body
            break;
        case SEND_MESSAGE_BODY:
            let body = state.newMassageBody
            state.newMassageBody = ''
            state.messagesData.push({id: v1(), message: body})
            break;
    }

    return state;
}

export const sendMassageCreator = ():SendMassageBodyActionType => {
    return {
        type: SEND_MESSAGE_BODY,
    }
}

export const updateNewMassageBodyCreator = (text: string):UpdateNewMassageBodyActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export default DialogsReducer;