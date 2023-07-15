import {ActionTypes, sideBarType} from "./Store";
import {v1} from "uuid";

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

const SideBarReducer = (state = initialState, action: ActionTypes) => {
    return state;
}

export default SideBarReducer