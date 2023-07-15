import {ActionTypes, RootStateType} from "../../../Redux/Store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/Profile-reducer";



const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        addPost: (text: string)=>{dispatch( addPostCreator(text))},
        onPostChange: (text: string)=>{dispatch(updateNewPostTextCreator(text))},
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);