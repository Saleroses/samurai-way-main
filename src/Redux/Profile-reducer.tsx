import {
    ActionTypes,
    addPostActionType,
    ChangeNewTextActionType,
    PostsDataType,
    ProfilePageType,
} from "./State";
import {v1} from "uuid";




const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const ProfileReducer = (state: ProfilePageType, action: ActionTypes) => {



        if (action.type === ADD_POST) {
            let newPost: PostsDataType = {
                id: v1(),
                message: action.postMessage,
                likeCounter: 0
            }
            state.postsData.unshift(newPost);
            state.newPostText = ''

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            state.newPostText = action.newPostText
        }
    return state;

}

export const addPostCreator = (text: string): addPostActionType => {
    return {
        type: ADD_POST,
        postMessage: text
    }
}

export const updateNewPostTextCreator = (text: string):ChangeNewTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}

export default ProfileReducer



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