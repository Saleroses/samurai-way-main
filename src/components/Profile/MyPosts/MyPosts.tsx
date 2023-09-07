import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {AddPostAC, PostsDataType, ProfilePageType, UpdateNewPostTextAC} from "../../../Redux/Profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/Redux-store";




type myPostProps = {
    posts: ProfilePageType
}


export const MyPosts = (props: myPostProps) => {

    const newPostText = useSelector <AppRootStateType, string>(state => state.profilePage.newPostText)
    const newPost = useSelector <AppRootStateType, Array<PostsDataType>>(state => state.profilePage.postsData)
    let dispatch = useDispatch()

    let post = newPost.map( (p) =>
        <Post key={p.id} message={p.message} likeCounter={p.likeCounter}/>)

    let addPost = () => {
        dispatch(AddPostAC())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea onChange={onPostChange} value={newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            {post}
        </div>
    );
};
