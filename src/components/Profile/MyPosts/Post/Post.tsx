import React, {MouseEventHandler} from 'react';
import s from "./Post.module.css";
import ava from "../../../../img//avatar/ava.jpeg";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../../../../Redux/Redux-store";
import {LikePostAC, PostsDataType} from "../../../../Redux/Profile-reducer";


type postType = {
    id: string
    message: string
    likeCounter: number
}

export const Post = (props: postType) => {
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

