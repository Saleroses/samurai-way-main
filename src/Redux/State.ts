//
// let rerenderEntireTree: (state: RootStateType) => void = () => {
//     console.log("Change")
// }

export type AddPostPropsType = {
    addPost: (postMessage: string) => void
    Message: string
}

export type PostsDataType = {
    id: number
    message: string
    likeCounter: number
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    message: string
}

export type friendsDataType = {
    id: number
    name: string
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
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
    updateNewPostText: (newPostText: string) => void
    addPost: (postMessage: string) => void
    _callSubscriber: (callback: () => void ) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}


let store: StoreType = {

    _state: {
        profilePage: {
            newPostText: "",
            postsData: [
                {id: 1, message: "How are you?", likeCounter: 12},
                {id: 2, message: "First post", likeCounter: 32},
                {id: 3, message: "First first post)", likeCounter: 16},
            ],
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
            ],
            messagesData: [
                {id: 1, message: "Yooo"},
                {id: 2, message: "Hi bro!"},
                {id: 3, message: "Hey"},
                {id: 4, message: "Wazzzzzzzzzz  lorem10 zzzzzzzzuuup"},
                {id: 5, message: "Salam"},
                {id: 6, message: "Dobreishego"},
            ]
        },

        sideBar: {
            friendsData: [
                {id: 1, name: "Dimych",},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
                {id: 7, name: "Val"},
            ]
        },
    },

    getState () {
        return this._state;
    },

    _callSubscriber: () => {
    console.log("Change")
},
    addPost (postMessage: string) {
        let newPost: PostsDataType = {id: new Date().getTime(), message: postMessage, likeCounter: 0};
        this._state.profilePage.postsData.unshift(newPost);
        this._callSubscriber(this.getState);
    },

    updateNewPostText (newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this.getState);
    },

    subscribe (observer) {
        this._callSubscriber = observer
    },

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