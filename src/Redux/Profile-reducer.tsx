import {v1} from "uuid";

export type PostsDataType = {
    id: string
    message: string
    likeCounter: number
}

export type ProfilePageType = {
    newPostText: string
    postsData: Array<PostsDataType>

}

export type AddPostAT = ReturnType<typeof AddPostAC>
export type UpdateNewPostTextAT = ReturnType<typeof UpdateNewPostTextAC>
export type LikePostAT = ReturnType<typeof LikePostAC>
export type ActionType = AddPostAT | UpdateNewPostTextAT | LikePostAT



let initialState: ProfilePageType = {
    newPostText: '',
    postsData: [
        {id: v1(), message: "How are you?", likeCounter: 12},
        {id: v1(), message: "First post", likeCounter: 32},
        {id: v1(), message: "First first post)", likeCounter: 16},
    ]}

export const ProfileReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsDataType = {
                id: v1(),
                message: state.newPostText,
                likeCounter: 0,
            }
            return {...state,
                newPostText: '',
                postsData: [newPost, ...state.postsData],
            }

        case "UPDATE_NEW_POST_TEXT":
            return {...state,
                postsData: [...state.postsData],
                newPostText: action.text
            }

        case "LIKE-POST":

            return {...state,
                postsData: [...state.postsData]
                    .map( (p)=> p.id === action.postId ? {...p, likeCounter: p.likeCounter+1} : p)
            }

        default:
            return state
    }
}


export const AddPostAC = () => {
    return {type: "ADD-POST"} as const
}

export const UpdateNewPostTextAC = (text: string) => {
    return {type: "UPDATE_NEW_POST_TEXT", text} as const
}

export const LikePostAC = (postId: string) => {
    return {type: "LIKE-POST", postId} as const
}





// switch (action.type) {
//     case ADD_POST:
//         let newPost: PostsDataType = {
//             id: v1(),
//             message: action.postMessage,
//             likeCounter: 0
//         }
//         state.postsData.unshift(newPost);
//         state.newPostText = ''
//         return state;
//
//     case UPDATE_NEW_POST_TEXT:
//         state.newPostText = action.newPostText
//         return state;
// }