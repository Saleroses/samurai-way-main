import React, {MouseEventHandler} from 'react';
import s from "./Post.module.css";
import ava from "../../../../img//avatar/ava.jpeg";
import {useDispatch} from "react-redux";
import {store} from "../../../../Redux/Redux-store";
import {LikePostAC} from "../../../../Redux/Profile-reducer";


type postType = {
    id: string
    message: string
    likeCounter: number
}

export const Post = (props: postType) => {
    let state = store.getState().profilePage.postsData
    let dispatch = useDispatch()

    let likePost = () => {
        dispatch(LikePostAC(props.id))
    }

    return (
        <div className={s.item} key={props.id}>
            <img src={ava}/>
            {props.message}
            <div>
                {props.likeCounter}
                <button onClick={likePost}> Like </button>
            </div>
        </div>
    );
};

