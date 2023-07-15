
import {v1} from "uuid";
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import SideBarReducer from "./SideBar-reducer";

export type AddPostPropsType = {
    addPost: (postMessage: string) => void
    Message: string
}

export type PostsDataType = {
    id: string
    message: string
    likeCounter: number
}

export type DialogsDataType = {
    id: string
    name: string
}

export type MessagesDataType = {
    id: string
    message: string
}

export type friendsDataType = {
    id: string
    name: string
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMassageBody: string

}

export type sideBarType = {
    friendsData: Array<friendsDataType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: sideBarType
}

export type StoreType = {
    _state: RootStateType
    //updateNewPostText: (newPostText: string) => void
    //addPost: (postMessage: string) => void
    _callSubscriber: (callback: () => void) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    addPostActionType |
    ChangeNewTextActionType |
    UpdateNewMassageBodyActionType |
    SendMassageBodyActionType


export type addPostActionType = {
    type: "ADD-POST"
    postMessage: string
}

export type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}

export type UpdateNewMassageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}

export type SendMassageBodyActionType = {
    type: "SEND-MESSAGE-BODY"
}




let store: StoreType = {

    _state: {
        profilePage: {
            newPostText: "",
            postsData: [
                {id: v1(), message: "How are you?", likeCounter: 12},
                {id: v1(), message: "First post", likeCounter: 32},
                {id: v1(), message: "First first post)", likeCounter: 16},
            ],
        },

        dialogsPage: {
            dialogsData: [
                {id: v1(), name: "Dimych"},
                {id: v1(), name: "Andrey"},
                {id: v1(), name: "Sveta"},
                {id: v1(), name: "Sasha"},
                {id: v1(), name: "Viktor"},
                {id: v1(), name: "Valera"},
            ],
            messagesData: [
                {id: v1(), message: "Yooo"},
                {id: v1(), message: "Hi bro!"},
                {id: v1(), message: "Hey"},
                {id: v1(), message: "Wazzzzzzzzzz  lorem10 zzzzzzzzuuup"},
                {id: v1(), message: "Salam"},
                {id: v1(), message: "Dobreishego"},
            ],
            newMassageBody: ""
        },

        sideBar: {
            friendsData: [
                {id: v1(), name: "Dimych",},
                {id: v1(), name: "Andrey"},
                {id: v1(), name: "Sveta"},
                {id: v1(), name: "Sasha"},
                {id: v1(), name: "Viktor"},
                {id: v1(), name: "Valera"},
                {id: v1(), name: "Val"},
            ]
        },
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber: () => {
        console.log("Change")
    },


    dispatch: function(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage= DialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = SideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this.getState);

    }
    //     if (action.type === ADD_POST) {
    //         let newPost: PostsDataType = {
    //             id: v1(),
    //             message: action.postMessage,
    //             likeCounter: 0
    //         }
    //         this._state.profilePage.postsData.unshift(newPost);
    //         this._state.profilePage.newPostText = ''
    //         this._callSubscriber(this.getState);
    //
    //     }
    //     else if (action.type === UPDATE_NEW_POST_TEXT) {
    //         this._state.profilePage.newPostText = action.newPostText
    //         this._callSubscriber(this.getState);
    //     }
    //     else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //         this._state.dialogsPage.newMassageBody = action.body
    //         this._callSubscriber(this.getState);
    //     }
    //     else if (action.type === SEND_MESSAGE_BODY) {
    //         let body = this._state.dialogsPage.newMassageBody
    //         this._state.dialogsPage.newMassageBody = ''
    //         this._state.dialogsPage.messagesData.push({id: v1(), message: body},)
    //         this._callSubscriber(this.getState);
    //     }
    // },

}


export default store;

// export const addPost = (postMessage: string) => {
//     let newPost: PostsDataType = {id: new Date().getTime(), message: postMessage, likeCounter: 0};
//     state.profilePage.postsData.unshift(newPost);
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newPostText: string) => {
//     state.profilePage.newPostText = newPostText
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer: (state: RootStateType) => void) => {
//     rerenderEntireTree = observer
// }