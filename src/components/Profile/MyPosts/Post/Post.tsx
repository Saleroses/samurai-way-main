import React, {MouseEventHandler} from 'react';
import s from "./Post.module.css";
import ava from "../../../../img//avatar/ava.jpeg";
import {useDispatch} from "react-redux";
import {LikePostAC} from "../../../../Redux/Profile-reducer";


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
            <div className={s.message}>
                {props.message}
            </div>
            <div>
                {props.likeCounter}
                <button onClick={likePost}> Like </button>
            </div>
        </div>
    );
};

