
import {v1} from "uuid";

export type DialogsDataType = {
    id: string
    name: string
}

export type MessagesDataType = {
    id: string
    message: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMassageBody: string
}


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

export type SendMassageBodyAT = ReturnType <typeof SendMassageAC>
export type UpdateNewMassageBodyAT = ReturnType <typeof UpdateNewMassageBodyAC>

export type ActionType = SendMassageBodyAT | UpdateNewMassageBodyAT

export const DialogsReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            return action.text

        case "SEND_MESSAGE_BODY":
            let newMassage = {
                id: v1(),
                message: "",
            }
            return [...state.messagesData, newMassage]
    }

    return state;
}

export const UpdateNewMassageBodyAC = (text: string) => {
    return {type: "UPDATE_NEW_MESSAGE_BODY", text}
}

export const SendMassageAC = () => {
    return {type: "SEND_MESSAGE_BODY"} as const
}
