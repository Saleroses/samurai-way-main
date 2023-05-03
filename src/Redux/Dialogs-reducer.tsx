import {
    ActionTypes,
    DialogsPageType,
    SendMassageBodyActionType,
    UpdateNewMassageBodyActionType
} from "./State";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE_BODY = "SEND-MESSAGE-BODY"

const DialogsReducer = (state: DialogsPageType, action: ActionTypes) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMassageBody = action.body

    }
    else if (action.type === SEND_MESSAGE_BODY) {
        let body = state.newMassageBody
        state.newMassageBody = ''
        state.messagesData.push({id: v1(), message: body})
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