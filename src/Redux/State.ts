

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

export type ProfilePageType = {
    postsData: Array<PostsDataType>
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {

    profilePage: {
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
            {id: 4, message: "Wazzzzzzzzzz  lorem10  lorem10  lorem10  lorem10  lorem10  lorem10  lorem10  lorem10  lorem10  lorem10  lorem10  lorem10 lorem10 zzzzzzzzuuup"},
            {id: 5, message: "Salam"},
            {id: 6, message: "Dobreishego"},
        ]
    }


}