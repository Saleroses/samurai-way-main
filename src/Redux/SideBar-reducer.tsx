import {v1} from "uuid";

export type friendsDataType = {
    id: string
    name: string
}

export type sideBarType = {
    friendsData: Array<friendsDataType>
}

let initialState: sideBarType = {
    friendsData: [
        {id: v1(), name: "Dimych",},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Viktor"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Val"},
    ]
}

export type ActionType = {}

export const SideBarReducer = (state = initialState, action: ActionType) => {
    return state;
}